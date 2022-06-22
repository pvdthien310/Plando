const Pet = require('./../model/pet.model')
const Account = require('./../model/account.model')
const aes256 = require('aes256');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const SendResponse = require('../utils/SendResponse');
const { default: mongoose } = require('mongoose');

const petController = {
    getAll: catchAsync(async (req, res, next) => {
        try {
            const result = await Pet.find()

            if (result)
                SendResponse(result, 200, res)
            else return next(new AppError("Some error occurred while retrieving pets.", 404));
        }
        catch (err) {
            next(new AppError("Error load pet!", 500))
        }
    }),
    create: catchAsync(async (req, res, next) => {
        const { dob, exp, petTypeId, beingUsed } = req.body

        if (!petTypeId || !exp || !dob || !beingUsed)
            next(new AppError("Some params are missing!", 404))

        try {
            const newPet = new Pet({
                petTypeId: mongoose.Types.ObjectId(petTypeId),
                exp: exp,
                dob: dob,
                beingUsed: beingUsed
            })

            const result = await newPet.save()
            if (result === newPet) {
                SendResponse("Add pet successfully", 200, res)
            }
            else next(new AppError("Error While creating pet", 404))
        }
        catch (err) {
            next(next(new AppError("Error while creating pet!", 500)))
        }
    })
}
module.exports = petController;