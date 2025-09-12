import { Request, Response } from 'express';
import { prisma } from '../db/prisma.js';

export async function me(req: Request, res: Response) {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  return res.json({ user });
}

export async function listCustomers(_req: Request, res: Response) {
  const customers = await prisma.user.findMany({ where: { role: 'CUSTOMER' } });
  return res.json({ customers });
}


