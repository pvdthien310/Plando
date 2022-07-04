const mongoose = require('mongoose')
const { Schema } = mongoose;

const PetType = new Schema({
  name: String,
  requiredLevel: Number,
  price: Number,
  isPublished: Boolean,
  url: String
});

module.exports = mongoose.model('PetType', PetType);