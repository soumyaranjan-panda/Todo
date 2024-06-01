const Todo = require("../models/Todo");

const GetTodo = async (req, res) => {
  const response = await Todo.find({});
  res.status(200).json({
    response,
  });
};

module.exports = GetTodo;
