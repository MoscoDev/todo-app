const express = require("express");
const mongoose = require("mongoose")
const app = express();
const db =
  "mongodb+srv://LannisterPay:TU4okN85or9zyJxR@lannisterpay-tpss.yu4zq49.mongodb.net/todo?retryWrites=true&w=majority";
const todo = require("./routes/todo.routes")
app.use(express.json());

// app.route()
app.use("/api/v1/todos", todo);


mongoose.connect(db, ()=>{console.log("db connected")})
app.listen(3001, ()=>console.log("app running on port 3000"))