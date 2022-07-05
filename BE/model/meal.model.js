const mongoose = require('mongoose');
const { Schema } = mongoose;

const Meal = new Schema({
  price: Number,
  name: String,
  exp: Number,
  url: String
});

module.exports = mongoose.model('Meal', Meal);