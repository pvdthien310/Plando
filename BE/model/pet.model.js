const mongoose = require('mongoose')
const { Schema } = mongoose;

const Pet = new Schema({
  petTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PetType"
  },
  exp: Number,
  dob: Date,
  beingUsed: Boolean
});

module.exports = mongoose.model('Pet', Pet);