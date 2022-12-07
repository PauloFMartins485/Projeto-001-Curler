import express from "express";
import authorsController from "../controllers/authorsController";
import { ensureAuthenticated } from '../services/auth';

export const authorsRouter = express.Router();

// authorsRouter.get('/', ensureAuthenticated, authorsController.authorsGet);
authorsRouter.get('/', authorsController.authorsGet);
// authorsRouter.post('/', ensureAuthenticated, authorsController.authorsPost);
authorsRouter.post('/', authorsController.authorsPost);
// authorsRouter.delete('/:id/', ensureAuthenticated, authorsController.authorsDelete);
authorsRouter.delete('/:id/', authorsController.authorsDelete);
// authorsRouter.patch('/:id/', ensureAuthenticated, authorsController.authorsPatch);
authorsRouter.patch('/:id/', authorsController.authorsPatch);