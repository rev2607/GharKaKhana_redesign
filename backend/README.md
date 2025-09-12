# Ghar Ka Khana — Backend (MVP)

Node.js + Express + TypeScript backend for a meal-plan delivery service. Uses Prisma (Postgres), Supabase (Auth + Storage), and Razorpay (payments). Dockerized and CI-ready.

## Features
- Supabase Phone OTP auth (JWT verified on server)
- Meal Plans CRUD (admin)
- Orders with Razorpay order creation
- Razorpay webhook signature verification; mark orders PAID/ACTIVE
- Refund request tickets (admin resolves manually)
- Swagger docs at `/docs`
- Prisma + seed data (plans + admin/user)
- Jest tests with mocks
- Dockerfile + docker-compose

## Prerequisites
- Node 18+
- Docker (optional for local DB)

## Setup
1. Copy envs
```bash
cp backend/env.example backend/.env
```
2. Install deps
```bash
cd backend
npm i
```
3. Start Postgres (choose one):
- Docker:
```bash
docker compose -f backend/docker-compose.yml up -d db
```
- Or use Supabase hosted Postgres and set `DATABASE_URL` accordingly.
4. Prisma
```bash
npx prisma generate
npx prisma migrate dev --name init
npm run seed
```
5. Run dev
```bash
npm run dev
```
API: http://localhost:4000
Docs: http://localhost:4000/docs

## Supabase Auth (Phone OTP)
- Client logs in via Supabase phone OTP and obtains a JWT.
- Send `Authorization: Bearer <jwt>` with requests.
- Server verifies the JWT using `SUPABASE_JWT_SECRET` and auto-creates a DB user on first request.

Example:
```bash
curl -H "Authorization: Bearer <supabase_jwt>" http://localhost:4000/api/v1/auth/me
```

Seeded users map to placeholder Supabase user ids:
- Admin `supabase_user_id`: `seed-admin-user-id`
- Customer `supabase_user_id`: `seed-customer-user-id`

## Image Uploads (Supabase Storage)
- Configure a bucket (e.g., `meal-plan-images`).
- Use `POST /api/v1/plans/:id/image` to get a signed upload URL, then upload directly from client.

## Payments (Razorpay)
- Amounts sent to Razorpay in paise. MVP computes `amount_in_inr = plan.price_in_inr` (already weekly/monthly total in seed). If switching to per-day pricing, adjust accordingly.
- Create order on server and return `razorpay_order_id`.
- Webhook verifies signature using `RAZORPAY_WEBHOOK_SECRET`.

Test mode setup:
- Set `RAZORPAY_KEY_ID`/`RAZORPAY_KEY_SECRET` to test keys.
- Use Razorpay test cards/UPI: see Razorpay dashboard docs.

Example create order:
```bash
curl -X POST http://localhost:4000/api/v1/orders \
  -H "Authorization: Bearer <supabase_jwt>" \
  -H "Content-Type: application/json" \
  -d '{"mealplan_id":"<plan_id>","start_date":"2025-01-01"}'
```

Simulate webhook (locally):
```bash
curl -X POST http://localhost:4000/api/v1/payments/razorpay/webhook \
  -H 'Content-Type: application/json' \
  -H 'X-Razorpay-Signature: test' \
  -d '{"event":"payment.captured","payload":{"payment":{"entity":{"id":"pay_123","order_id":"rzp_order_123"}}}}'
```

Admin manual refund example (code comment only):
```ts
// await razorpay.payments.refund(paymentId, { amount: optionalAmountInPaise });
```

## Docker
```bash
docker compose -f backend/docker-compose.yml up --build
```

## Tests
```bash
cd backend
npm test
```

## API Docs
- Swagger UI: `/docs`
- Postman collection: see `postman_collection.json` in `backend/`.

## Security Notes
- Never expose Razorpay secret or Supabase service role key to clients.
- Only use service role key on the server.
