const PetType = require('./../model/petType.model')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const SendResponse = require('../utils/SendResponse');
const { default: mongoose } = require('mongoose');

const petTypeController = {
    getAll: catchAsync(async (req, res, next) => {
        try {
            const result = await PetType.find()

            if (result)
                SendResponse(result, 200, res)
            else return next(new AppError("Some error occurred while retrieving petTypes.", 404));
        }
        catch (err) {
            next(new AppError("Error load petType!", 500))
        }
    }),
    create: catchAsync(async (req, res, next) => {
        const { requiredLevel, name, price } = req.body

        if (!requiredLevel || !name || !price)
            next(new AppError("Some params are missing!", 404))

        try {
            const newPetType = new PetType({
                name: name,
                requiredLevel: requiredLevel,
                price: price,
                isPublished: true
            })
            const result = await newPetType.save()
            if (result === newPetType) {
                SendResponse("Add petType successfully", 200, res)
            }
            else next(new AppError("Error While creating petType", 404))
        }
        catch (err) {
            next(next(new AppError("Error while creating petType!", 500)))
        }
    })
}
module.exports = petTypeController;