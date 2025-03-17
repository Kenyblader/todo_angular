import { Router } from "express";
import { addSubtask, deleteSubtask, getAllSubtask, getSubtaskById, getSubtaskByTask, updateSubtask } from "../controllers/subtaskController";


const subtaskRoute=Router();
subtaskRoute.post('/subtasks',addSubtask);
subtaskRoute.get('/subtasks',getAllSubtask);
subtaskRoute.get('/subtasks/:id',getSubtaskById);
subtaskRoute.get('/subtasks/:id',getSubtaskByTask);
subtaskRoute.put('/subtasks/:id',updateSubtask);
subtaskRoute.delete('/subtasks/:id',deleteSubtask);

export default subtaskRoute