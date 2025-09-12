import { Request, Response } from 'express';
import { prisma } from '../db/prisma.js';
import { createRazorpayOrder, verifyWebhookSignature } from '../services/razorpayService.js';

export async function createOrder(req: Request, res: Response) {
  const { mealplan_id, start_date } = req.body as { mealplan_id: string; start_date: string };
  const plan = await prisma.mealPlan.findUnique({ where: { id: mealplan_id } });
  if (!plan) return res.status(404).json({ message: 'Plan not found' });

  const startDate = new Date(start_date);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + plan.duration_days);

  const order = await prisma.order.create({
    data: {
      user_id: req.user!.id,
      mealplan_id,
      plan_name_snapshot: plan.name,
      amount_in_inr: plan.price_in_inr,
      duration_days: plan.duration_days,
      start_date: startDate,
      end_date: endDate,
      status: 'PENDING_PAYMENT'
    }
  });

  const rzp = await createRazorpayOrder({ amountInInr: plan.price_in_inr, receipt: order.id });
  await prisma.order.update({ where: { id: order.id }, data: { razorpay_order_id: rzp.id } });

  res.status(201).json({ order: { ...order, razorpay_order_id: rzp.id }, razorpay: rzp });
}

export async function getOrder(req: Request, res: Response) {
  const { id } = req.params;
  const order = await prisma.order.findUnique({ where: { id } });
  if (!order) return res.status(404).json({ message: 'Not found' });
  if (order.user_id !== req.user!.id) return res.status(403).json({ message: 'Forbidden' });
  res.json({ order });
}

export async function confirmOrder(req: Request, res: Response) {
  const { id } = req.params;
  const order = await prisma.order.update({ where: { id }, data: { status: 'ACTIVE' } });
  res.json({ order });
}

export async function listOrders(_req: Request, res: Response) {
  const orders = await prisma.order.findMany({ orderBy: { created_at: 'desc' } });
  res.json({ orders });
}

export async function razorpayWebhook(req: Request, res: Response) {
  const signature = req.headers['x-razorpay-signature'] as string;
  const payload = JSON.stringify(req.body);
  const valid = verifyWebhookSignature(payload, signature);
  if (!valid) return res.status(400).json({ message: 'Invalid signature' });

  // Store raw payload for debugging
  // In production, consider a dedicated table; simple log for MVP
  // eslint-disable-next-line no-console
  console.log('Razorpay webhook:', payload);

  const event = req.body.event as string;
  if (event === 'payment.captured' || event === 'payment.authorized') {
    const payment = req.body.payload?.payment?.entity;
    const razorpayOrderId = payment?.order_id as string | undefined;
    if (razorpayOrderId) {
      const order = await prisma.order.findFirst({ where: { razorpay_order_id: razorpayOrderId } });
      if (order) {
        await prisma.order.update({
          where: { id: order.id },
          data: {
            razorpay_payment_id: payment.id,
            razorpay_signature: signature,
            status: 'PAID'
          }
        });
        await prisma.order.update({ where: { id: order.id }, data: { status: 'ACTIVE' } });
      }
    }
  }

  res.json({ received: true });
}


