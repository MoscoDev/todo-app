const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
  try {
    let { name, description, duration } = req.body;
    const expiresIn = Date.now() + (parseInt(duration) * 60 * 1000);
    console.log(expiresIn.is)
    const todo = await Todo.create({ name, description, duration, expiresIn});
    if (!todo) {
      return res.status(400).json({ message: "bad request" });
    }
    return res.status(200).json({
      error: false,
      todo,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error.message,
    });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (!todos) {
      return res.status(400).json({ message: "bad request" });
    }
    return res.status(200).json({
      error: false,
      todos,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const getTodosByID = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "not found" });
    }
    return res.status(200).json({
      error: false,
      todo,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: "not found" });
    }
    return res.status(200).json({
      error: false,
      todo,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

module.exports = { createTodo, getAllTodos, getTodosByID, deleteTodo };
