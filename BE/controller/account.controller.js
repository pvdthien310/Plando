const Account = require('./../model/account.model')
const aes256 = require('aes256');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const SendResponse = require('../utils/SendResponse');

const accountController = {
    getAll: catchAsync(async (req, res, next) => {
        try {
            const result = await Account.find()

            if (result)
                SendResponse(result, 200, res)
            else return next(new AppError("Some error occurred while retrieving Accounts.", 404));
        }
        catch (err) {
            next(new AppError("Error load account!", 500))
        }
    }),
    getById: catchAsync(async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await Account.findById(id).populate('todos')
                .populate('sessions')
                .populate({
                    path: 'sessions',
                    populate: {
                        path: 'todos',
                        model: 'Todo'
                    },
                })
                .populate('pets')
                .populate({
                    path: 'pets',
                    populate: {
                        path: 'petTypeId',
                        model: 'PetType'
                    },
                })

            if (result)
                SendResponse(result, 200, res)
            else return next(new AppError("Some error occurred while retrieving account.", 404));
        }
        catch (err) {
            next(new AppError("Error load Account by Id!", 500))
        }
    }),
    create: catchAsync(async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            next(new AppError("Some params is missing or null!", 404))
            return;
        }
        try {
            const account = await Account.findOne({ email: req.body.email });
            if (account != null)
                next(new AppError("Account is Existed!", 409))
            else {
                const newAccount = new Account({
                    email: req.body.email,
                    password: req.body.password,
                    sex: 'male',
                    totalPoint: 0,
                    level: 1,
                    exp: 0
                })

                const result = await newAccount.save()
                if (result == newAccount)
                    SendResponse(result, 200, res)
                else next(new AppError("Error while creating account!", 404))
            }
        }
        catch (err) {
            next(new AppError("Error create account! ," + err, 500))
        }
    }),
    SignIn: catchAsync(async (req, res, next) => {
        const { email, password } = req.body
        try {
            let result = await Account.findOne({ email: email })
                .populate('pets')
                .populate('sessions')
                .populate({
                    path: 'sessions',
                    populate: {
                        path: 'todos',
                        model: 'Todo'
                    },
                })

            if (result) {
                if (aes256.decrypt(process.env.SECRET_KEY_HASH, result.password).toString() == password) {
                    const accessToken = await result.createToken()
                    SendResponse({ data: result, token: accessToken }, 200, res)
                }
                else next(new AppError('Password is incorrect!', 404))
            }
            else return next(new AppError("Login Failed! Account is not existed!", 404));
        }
        catch (err) {
            next(new AppError("Error load account!" + err, 500))
        }
    }),
}
module.exports = accountController;