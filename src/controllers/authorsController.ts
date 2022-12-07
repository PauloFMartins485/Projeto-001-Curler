import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import { Authors } from "../models/authorsModel";

const prisma = new PrismaClient();

// GET ROUTES
const authorsGet = async (request: Request, response: Response) => {
    await prisma.authors.findMany().then((authors:Authors[]) => {
    response.send(authors);
    }).catch((err: any) => {
    response.sendStatus(404);
    });
};
// POST ROUTES
const authorsPost = async (request: Request, response: Response) => {
    const data = {
        name: request.body.name,
        picture: request.body.picture,
        email: request.body.email,
    };
    await prisma.authors.create({data: data}).then((authors) => {
        const newData = {
        nome: authors.name,
        picture: authors.picture,
        email: authors.email
        };
        response.send(newData);
    }).catch(err => {
        response.sendStatus(400);
    });
};
// PATCH ROUTES
const authorsPatch = async (request: Request, response: Response) => {
    const authorRecived = await prisma.authors.findUnique({ 
      where:  {
        id: Number(request.params.id),
      }
    });
    if(authorRecived){
      await prisma.authors.update({
        where: {
          id: Number(request.params.id),
        },
        data: {
          name: request.body.name,
          picture: request.body.picture,
          email: request.body.email,
        },
      });
      response.sendStatus(200);
    }else{
      response.sendStatus(404);
    };
  };
  

// DELETE ROUTES
const authorsDelete = async (request: Request, response: Response) => {
    const authorRecived = await prisma.authors.findUnique({ 
      where:  {
        id: Number(request.params.id),
      }
    });
    if(authorRecived){
      await prisma.authors.delete({
        where: {
          id: Number(request.params.id),
        }
      }).then((authors) => {
        response.sendStatus(204); 
      });
    }else{
      response.sendStatus(404);
    };
  };

export default {authorsGet, authorsPost, authorsDelete, authorsPatch};