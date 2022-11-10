import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import { auth } from '../services/auth';

const prisma = new PrismaClient();

// GET ROUTES

// POST ROUTES

const loginPost = async (request: Request, response: Response) => {
    const userRecived = request.body;
    const recivedPassword = userRecived.password;

    const user = await prisma.user.findUnique({ where: { username: userRecived.email }});
    
    if (user) {
        const isValid = bcrypt.compareSync(userRecived.password, user.hashedpass);
        response.json(`${isValid? auth(user.id):"Falha na atentificação!"}`).send();
    } else {
        // response.json("Falha na atentificação!")
        response.errored
    }    
}

// DELETE ROUTES

// PUT ROUTES

// PATCH ROUTES

// export default {userGet, userPost, userDelete, userPatch};

export default {loginPost}