const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  deleteTodo,
  getTodosByID,
} = require("../controllers/todo.controller");

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:id").get(getTodosByID).delete(deleteTodo);


module.exports = router
