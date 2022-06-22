const Todo = require('./../model/todo.model')
const Account = require('./../model/account.model')
const Session = require('./../model/session.model')
const aes256 = require('aes256');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const SendResponse = require('../utils/SendResponse');
const { default: mongoose } = require('mongoose');

const todoController = {
    getAll: catchAsync(async (req, res, next) => {
        try {
            const result = await Todo.find()

            if (result)
                SendResponse(result, 200, res)
            else return next(new AppError("Some error occurred while retrieving todos.", 404));
        }
        catch (err) {
            next(new AppError("Error load todo!", 500))
        }
    }),
   
    create: catchAsync(async (req, res, next) => {
        const { body, start, end, point, sessionId, accountId } = req.body

        if (!body || !start || !end || !point || !sessionId || !accountId || start > end)
            next(new AppError("Some params are missing or start day is after end day!", 404))

        try {
            const newTodo = new Todo({
                body: body,
                start: start,
                end: end,
                point: point,
                sessionId: mongoose.Types.ObjectId(sessionId),
                isDone: false,
                isExpired: false
            })
            const belongedAccount = await Account.findOne({ _id: accountId })
            const belongedSession = await Session.findOne({ _id: sessionId })

            if (belongedAccount != null && belongedSession != null) {
                const result = await newTodo.save()
                if (result === newTodo) {
                    belongedAccount.AddTodo(result._id, next)
                    belongedSession.AddTodo(result._id, next)
                    SendResponse("Add todo successfully!", 200, res)
                }
                else
                    next(new AppError("Error while creating Todo!", 500))
            }
            else
                next(new AppError("Account is not existed!", 404))
        }
        catch (err) {
            next(next(new AppError("Error while creating Todo!", 500)))
        }
    })
}
module.exports = todoController;