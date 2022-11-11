const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
    expiresIn: {
        type: Date
    }
  },

  { timestamps: true }
);
const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo
