const Todo = require("../models/Todo");
const inputValidator = require("../config/validator");

const PostTodo = async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = inputValidator(createPayload);
  if (!parsedPayload.success) {
    res.status(403).json({
      msg: "Incorrect Input",
      error: parsedPayload.error
    });
    return;
  }
  const todo = await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });
  res.json({
    msg: "Todo created",
  });
};

module.exports = PostTodo;
