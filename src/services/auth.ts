import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export function auth( id: number) {
  const token = jwt.sign({ data: 'foobar', userId: id }, 'secret', { expiresIn: '1h' });
  return token;
};

export async function ensureAuthenticated(req: any, res: any, next: any) {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'secret');
    const userId = decodedToken.userId;
    const confirmUser = await prisma.user.findUnique({ where: {id: userId}})
    if (confirmUser.id !== userId) {
      throw 'Invalid user';
    } else {
      return next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
