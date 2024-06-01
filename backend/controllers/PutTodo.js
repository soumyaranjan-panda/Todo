const Todo = require('../models/Todo')
const inputValidator = require('../config/validator')

const PutTodo = async (req, res) => {
    await Todo.findOneAndUpdate({_id: req.body.id}, {completed: true})
    res.json({
        msg: "Marked Completed"
    })
}

module.exports = PutTodo;