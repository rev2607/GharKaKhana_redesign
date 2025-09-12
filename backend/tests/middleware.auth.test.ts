import request from 'supertest';
import { app } from '../src/app.js';

jest.mock('../src/services/supabaseService.js', () => ({
  verifySupabaseJWT: () => ({ sub: 'test-user' })
}));

jest.mock('../src/db/prisma.js', () => {
  const userStore: any[] = [];
  return {
    prisma: {
      user: {
        findUnique: async ({ where: { supabase_user_id } }: any) => userStore.find(u => u.supabase_user_id === supabase_user_id) || null,
        create: async ({ data }: any) => { userStore.push({ id: 'u1', role: 'CUSTOMER', ...data }); return userStore[0]; }
      }
    }
  };
});

describe('auth middleware', () => {
  it('creates user on first request and returns /auth/me', async () => {
    const res = await request(app).get('/api/v1/auth/me').set('Authorization', 'Bearer token');
    expect(res.status).toBe(200);
    expect(res.body.user).toBeTruthy();
  });
});


