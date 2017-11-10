var mongoose = require ('mongoose');

const ToDosSchema = {
  id: Number,
  todo: String,
  completed: Boolean,
  deadline: Date

}

const ToDos = mongoose.model('todos', mongoose.Schema(ToDosSchema));

module.exports = ToDos;
