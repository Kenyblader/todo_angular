import { Router } from "express";
import { addProject, deleteProject, getAllProjects, getProjectById, updateProject } from "../controllers/projectController";

  const projectRoute=Router();
projectRoute.post('/projects',addProject);
projectRoute.get('/projects',getAllProjects);
projectRoute.get('/projects/:id',getProjectById);
projectRoute.put('/projects/:id',updateProject);
projectRoute.delete('/projects/:id',deleteProject);

export default projectRoute;