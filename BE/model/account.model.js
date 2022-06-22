const mongoose = require('mongoose');
require('dotenv').config();
const { Schema } = mongoose;
const hashPassword = require('./../utils/hashPassword')
const jwt = require('jsonwebtoken')

const Account = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  sex: String,
  totalPoint: Number,
  level: Number,
  exp: Number,
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
    },
  ]

});

Account.pre('save', function (next) {
  if (this.password && this.isModified('password'))
    this.password = hashPassword(this.password);
  next();
})

Account.method('AddTodo', async function (todoId, next) {
  this['todos'].push(mongoose.Types.ObjectId(todoId))
  this.save()
  next();
})

Account.methods.createToken = function () {
  return jwt.sign({
    email: this.email,
    password: this.password
  }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30 days' });
}

module.exports = mongoose.model('Account', Account);