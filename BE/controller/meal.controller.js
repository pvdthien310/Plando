const Meal = require('./../model/meal.model')
const Account = require('./../model/account.model')
const aes256 = require('aes256');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const SendResponse = require('../utils/SendResponse');
const { default: mongoose } = require('mongoose');

const mealController = {
    getAll: catchAsync(async (req, res, next) => {
        try {
            const result = await Meal.find()

            if (result)
                SendResponse(result, 200, res)
            else return next(new AppError("Some error occurred while retrieving meals.", 404));
        }
        catch (err) {
            next(new AppError("Error load meal!", 500))
        }
    }),
    create: catchAsync(async (req, res, next) => {
        const { price, name, exp, url } = req.body
        console.log(req.body)

        if (!price || !name || !exp || !url)
            next(new AppError("Spec is missing!", 404))

        try {
            const newMeal = new Meal({
                price: price,
                name: name,
                exp: exp,
                url: url
            })
            const existedMeal = await Meal.findOne({ name: name })
            if (existedMeal == null) {
                const result = await newMeal.save()
                if (result === newMeal) {
                    SendResponse("Add meal successfully", 200, res)
                }
                else next(new AppError("Error while creating meal", 500))
            }
            else
                next(new AppError("Meal is existed!", 400))
        }
        catch (err) {
            next(next(new AppError("Error while creating meal!", 500)))
        }
    })
}
module.exports = mealController;