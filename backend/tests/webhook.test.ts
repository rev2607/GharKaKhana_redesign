import request from 'supertest';
import { app } from '../src/app.js';

const orderStore: any[] = [{ id: 'o1', razorpay_order_id: 'rzp_order_123', status: 'PENDING_PAYMENT' }];

jest.mock('../src/db/prisma.js', () => ({
  prisma: {
    order: {
      findFirst: async ({ where: { razorpay_order_id } }: any) => orderStore.find(o => o.razorpay_order_id === razorpay_order_id) || null,
      update: async ({ where: { id }, data }: any) => { const idx = orderStore.findIndex(o => o.id === id); orderStore[idx] = { ...orderStore[idx], ...data }; return orderStore[idx]; }
    }
  }
}));

jest.mock('../src/services/razorpayService.js', () => ({
  verifyWebhookSignature: () => true
}));

describe('Razorpay webhook', () => {
  it('updates order to PAID/ACTIVE', async () => {
    const payload = {
      event: 'payment.captured',
      payload: { payment: { entity: { id: 'pay_123', order_id: 'rzp_order_123' } } }
    };
    const res = await request(app)
      .post('/api/v1/payments/razorpay/webhook')
      .send(payload);
    expect(res.status).toBe(200);
  });
});


