import { Router } from "express";
import { addUser, getAllUsers, getUserById, updateUser } from "../controllers/userController";

 const userRouter= Router()

userRouter.post('/users',addUser);
userRouter.get('/users',getAllUsers);
userRouter.get('/users/:id',getUserById);
userRouter.put('/users/:id',updateUser);

export default userRouter