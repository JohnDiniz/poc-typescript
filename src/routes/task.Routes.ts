import express from "express";
import * as TaskController from "../controller/taskController";

const router = express.Router();

router.get("/tasks/", TaskController.getAllTasks);
router.get("/tasks/:id", TaskController.getTaskById);
router.post("/tasks/", TaskController.createTask);
router.put("/tasks/:id", TaskController.updateTask);
router.delete("/tasks/:id", TaskController.deleteTask);

export default router;
