import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import { User } from "../models/userModel";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// GET ROUTES
const userGet = async (request: Request, response: Response) => {
  response.send("Server online!")
};

// POST ROUTES

// DELETE ROUTES

// PUT ROUTES

// PATCH ROUTES

// export default {userGet, userPost, userDelete, userPatch};

export default {userGet}