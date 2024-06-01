const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

module.exports = mongoose.model("Todo", TodoSchema);
