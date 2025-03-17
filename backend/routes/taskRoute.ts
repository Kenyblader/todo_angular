import { Router } from "express";
import { addTask, deleteTask, getAllTask, getTaskById, getTaskByProject, updateTask } from "../controllers/taskController";

const taskRoute=Router();
taskRoute.post('/tasks',addTask);
taskRoute.get('/tasks',getAllTask);
taskRoute.get('/tasks/:id',getTaskById);
taskRoute.get('/tasks/project/:id',getTaskByProject);
taskRoute.put('/tasks/:id',updateTask);
taskRoute.delete('/tasks/:id',deleteTask);

export default taskRoute