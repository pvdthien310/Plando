const Session = require('./../model/session.model')
const Account = require('./../model/account.model')
const aes256 = require('aes256');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const SendResponse = require('../utils/SendResponse');
const { default: mongoose } = require('mongoose');

const sessionController = {
    getAll: catchAsync(async (req, res, next) => {
        try {
            const result = await Session.find()

            if (result)
                SendResponse(result, 200, res)
            else return next(new AppError("Some error occurred while retrieving sessions.", 404));
        }
        catch (err) {
            next(new AppError("Error load session!", 500))
        }
    }),
    create: catchAsync(async (req, res, next) => {
        const { accountId, name } = req.body

        if (!accountId || !name)
            next(new AppError("Account Id is missing!", 404))

        try {
            const newSession = new Session({
                accountId: mongoose.Types.ObjectId(accountId),
                name: name
            })
            const belongedAccount = await Account.findOne({ _id: accountId })
            if (belongedAccount != null) {
                const result = await newSession.save()
                if (result === newSession) {
                    belongedAccount.AddSession(result._id, next)
                    SendResponse("Add Session for account successfully", 200, res)
                }
                else next(new AppError("Error While creating session", 404))
            }
            else
                next(new AppError("Account is not existed!", 404))
        }
        catch (err) {
            next(next(new AppError("Error while creating session!", 500)))
        }
    })
}
module.exports = sessionController;