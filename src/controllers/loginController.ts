import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// GET ROUTES

// POST ROUTES

const loginPost = async (request: Request, response: Response) => {
    const userRecived = request.body;
    const recivedPassword = userRecived.password;

    const user = await prisma.user.findUnique({ where: { username: userRecived.email }});
    
    if (user) {
        const isValid = bcrypt.compareSync(userRecived.password, user.hashedpass);
        response.json(`${isValid?"Login realizado com sucesso!":"Falha na atentificação!"}`).send();
    } else {
        response.json("Falha na atentificação!")
    }    
}

// DELETE ROUTES

// PUT ROUTES

// PATCH ROUTES

// export default {userGet, userPost, userDelete, userPatch};

export default {loginPost}