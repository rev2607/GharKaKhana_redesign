import request from 'supertest';
import { app } from '../src/app.js';

jest.mock('../src/services/supabaseService.js', () => ({
  verifySupabaseJWT: () => ({ sub: 'test-user' })
}));

const userStore: any[] = [{ id: 'u1', role: 'CUSTOMER', supabase_user_id: 'test-user' }];
const planStore: any[] = [{ id: 'p1', name: 'Veg Normal - Weekly', price_in_inr: 474, duration_days: 6 }];
const orderStore: any[] = [];

jest.mock('../src/db/prisma.js', () => ({
  prisma: {
    user: {
      findUnique: async ({ where: { supabase_user_id } }: any) => userStore.find(u => u.supabase_user_id === supabase_user_id) || null
    },
    mealPlan: {
      findUnique: async ({ where: { id } }: any) => planStore.find(p => p.id === id) || null
    },
    order: {
      create: async ({ data }: any) => { const o = { id: 'o1', ...data }; orderStore.push(o); return o; },
      update: async ({ where: { id }, data }: any) => {
        const idx = orderStore.findIndex(o => o.id === id); orderStore[idx] = { ...orderStore[idx], ...data }; return orderStore[idx];
      }
    }
  }
}));

jest.mock('../src/services/razorpayService.js', () => ({
  createRazorpayOrder: async () => ({ id: 'rzp_order_123', amount: 47400 })
}));

describe('POST /orders', () => {
  it('creates an order and returns razorpay order id', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .set('Authorization', 'Bearer token')
      .send({ mealplan_id: 'p1', start_date: new Date().toISOString() });
    expect(res.status).toBe(201);
    expect(res.body.order.razorpay_order_id).toBe('rzp_order_123');
  });
});


