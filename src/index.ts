import express, {Express} from 'express';
import {userRouter} from './routes/userRoutes';
import {loginRouter} from './routes/loginRoutes';
import {authorsRouter} from './routes/authorsRouter';
import {rateLimiter} from './rateLimiter';
import {authorizer} from './authorizer';

const app: Express = express();
app.use(express.json());
app.use(rateLimiter);
// app.use(authorize);
app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/authors", authorsRouter);
// app.use("/papers", paperRouter);
app.listen(8000, () => {
    console.log("Server funcionando!");
});