import express from "express";
import userController from "../controllers/userController";
import { ensureAuthenticated } from '../services/auth';

export const userRouter = express.Router();

userRouter.get('/', ensureAuthenticated, userController.userGet);
userRouter.post('/', ensureAuthenticated, userController.userPost);
userRouter.delete('/:id/', ensureAuthenticated, userController.userDelete);
userRouter.patch('/:id/', ensureAuthenticated, userController.userPatch);
