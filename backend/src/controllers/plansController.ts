import { Request, Response } from 'express';
import { prisma } from '../db/prisma.js';
import { getSignedUploadUrl } from '../services/supabaseService.js';

export async function list(_req: Request, res: Response) {
  const plans = await prisma.mealPlan.findMany({ orderBy: { created_at: 'desc' } });
  res.json({ plans });
}

export async function getBySlug(req: Request, res: Response) {
  const { slug } = req.params;
  const plan = await prisma.mealPlan.findUnique({ where: { slug } });
  if (!plan) return res.status(404).json({ message: 'Not found' });
  res.json({ plan });
}

export async function create(req: Request, res: Response) {
  const { name, slug, description, price_in_inr, duration_days, meals_per_day } = req.body;
  const plan = await prisma.mealPlan.create({
    data: { name, slug, description, price_in_inr, duration_days, meals_per_day }
  });
  res.status(201).json({ plan });
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const plan = await prisma.mealPlan.update({ where: { id }, data: req.body });
  res.json({ plan });
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  await prisma.mealPlan.delete({ where: { id } });
  res.status(204).send();
}

export async function uploadImage(req: Request, res: Response) {
  const { id } = req.params;
  const { filename, contentType } = req.body as { filename: string; contentType: string };
  const signedUrl = await getSignedUploadUrl(`plans/${id}/${filename}`, contentType);
  res.json({ signedUrl });
}


