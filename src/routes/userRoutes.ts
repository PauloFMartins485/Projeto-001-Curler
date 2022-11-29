import express from "express";
import userController from "../controllers/userController";
import { ensureAuthenticated } from '../services/auth';

export const userRouter = express.Router();

// userRouter.get('/', ensureAuthenticated, userController.userGet);
userRouter.get('/', userController.userGet);
// userRouter.post('/', ensureAuthenticated, userController.userPost);
userRouter.post('/', userController.userPost);
// userRouter.delete('/:id/', ensureAuthenticated, userController.userDelete);
userRouter.delete('/:id/', userController.userDelete);
userRouter.patch('/:id/', ensureAuthenticated, userController.userPatch);
