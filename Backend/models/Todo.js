const {Schema,model} = require('mongoose');

const TodoSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

const Todo = model('Todo', TodoSchema)

module.exports = Todo
