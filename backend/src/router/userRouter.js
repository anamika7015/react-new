import express, { Router } from 'express';
import { register, login } from '../controller/userController.js';


const userRouter = Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
// userRouter.post('/logout', logout);
export default userRouter;
