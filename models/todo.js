const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema(
    {
        task: String,
        completed: Boolean
    },
    {
        collection: 'todo'
    }
)

const ToDoModel = mongoose.model('ToDoModel', ToDoSchema);

module.exports = ToDoModel;