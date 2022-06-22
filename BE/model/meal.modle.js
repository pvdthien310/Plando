import mongoose from 'mongoose';
const { Schema } = mongoose;

const Meal = new Schema({
  price: Number,
  name: Number,
  exp: Number,
  url: String
});

module.exports = mongoose.model('Meal', Meal);