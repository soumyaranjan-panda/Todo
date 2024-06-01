const Todo = require('../models/Todo')
const inputValidator = require('../config/validator')

const PutTodo = (req, res) => {
    const createPayload = req.body
    const parsedPayload = inputValidator(createPayload)
    if(!parsedPayload.success){
        res.status(403).json({
            msg: "Incorrect input"
        })
        return
    }
    res.json({
        msg: "Hey there"
    })
}

module.exports = PutTodo;