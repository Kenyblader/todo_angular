import { Router } from "express";
import { addProject, deleteProject, getAllProjects, getAllProjectsAssociateToUser, getProjectById, updateProject } from "../controllers/projectController";
import { getProjectByUser } from "../controllers/userController";

  const projectRoute=Router();
projectRoute.post('/projects',addProject);
projectRoute.get('/projects',getAllProjects);
projectRoute.get('/projects/:id',getProjectById);
projectRoute.get('/projects/user/:id',getProjectByUser);
projectRoute.get('/projects/:id/user',getAllProjectsAssociateToUser);
projectRoute.put('/projects/:id',updateProject);
projectRoute.delete('/projects/:id',deleteProject);

export default projectRoute;