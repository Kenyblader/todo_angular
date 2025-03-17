import { Router } from "express";
import { addUser, getAllUsers, getProjectAssociatetoUser, getProjectByUser, getUserByEP, getUserById, updateUser } from "../controllers/userController";

 const userRouter= Router()

userRouter.post('/users',addUser);
userRouter.post('/users/login',getUserByEP);
userRouter.get('/users',getAllUsers);
userRouter.get('/users/project/:id',getProjectByUser)
userRouter.get('/users/:idUser/project',getProjectAssociatetoUser)
userRouter.get('/users/:id',getUserById);
userRouter.put('/users/:id',updateUser);

export default userRouter