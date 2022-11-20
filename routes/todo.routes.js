import express from "express";
import { createTodo, deleteAllTodos, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo.controllers.js";

const router = express.Router();

// Get All Todos
router.get("/",getAllTodos);

// Create a Todo
router.post("/",createTodo);

// Delete a Todo
router.delete("/:id",deleteTodo);

// Delete All Todos
router.delete("/",deleteAllTodos);

// Add check status
router.put("/:id",updateTodo);

export default router;


