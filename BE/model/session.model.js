const mongoose =  require('mongoose')
const { Schema } = mongoose;

const Session = new Schema({
  name: String,
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account"
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo"
    }
  ]
});

Session.method('AddTodo', function (todoId, next) {
  this['todos'].push(mongoose.Types.ObjectId(todoId))
  this.save()
  next();
})

module.exports = mongoose.model('Session', Session);