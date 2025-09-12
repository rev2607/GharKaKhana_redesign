import { Request, Response } from 'express';
import { prisma } from '../db/prisma.js';

export async function createRefundRequest(req: Request, res: Response) {
  const { order_id, reason } = req.body as { order_id: string; reason: string };
  const order = await prisma.order.findUnique({ where: { id: order_id } });
  if (!order) return res.status(404).json({ message: 'Order not found' });
  if (order.user_id !== req.user!.id) return res.status(403).json({ message: 'Forbidden' });
  const rr = await prisma.refundRequest.create({ data: { order_id, user_id: req.user!.id, reason } });
  res.status(201).json({ refund_request: rr });
}

export async function listRefunds(_req: Request, res: Response) {
  const items = await prisma.refundRequest.findMany({ orderBy: { created_at: 'desc' } });
  res.json({ refund_requests: items });
}

export async function markRefunded(req: Request, res: Response) {
  const { id } = req.params;
  const { admin_note } = req.body as { admin_note?: string };
  const rr = await prisma.refundRequest.update({ where: { id }, data: { status: 'REFUNDED', admin_note } });
  res.json({ refund_request: rr });
}


