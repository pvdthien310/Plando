const mongoose = require('mongoose')
const { Schema } = mongoose;

const Todo = new Schema({
  accountId:  {
    type : mongoose.Types.ObjectId,
    ref: "Account"
  }, // String is shorthand for {type: String}
  body: String,
  start: Date,
  end: Date,
  point: Number,
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  },
  isDone: Boolean,
  isExpired: Boolean
});

module.exports = mongoose.model('Todo', Todo);