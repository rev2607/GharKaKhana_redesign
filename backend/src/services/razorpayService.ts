import Razorpay from 'razorpay';
import crypto from 'crypto';
import { env } from '../config/env.js';

export const razorpay = new Razorpay({ key_id: env.razorpay.keyId, key_secret: env.razorpay.keySecret });

export async function createRazorpayOrder(params: { amountInInr: number; receipt: string }) {
  const order = await razorpay.orders.create({
    amount: params.amountInInr * 100,
    currency: 'INR',
    receipt: params.receipt
  });
  return order;
}

export function verifyWebhookSignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac('sha256', env.razorpay.webhookSecret);
  hmac.update(payload);
  const digest = hmac.digest('hex');
  return digest === signature;
}

// Example for admin manual refund (do not auto-call in code):
// await razorpay.payments.refund(paymentId, { amount: optionalAmountInPaise });


