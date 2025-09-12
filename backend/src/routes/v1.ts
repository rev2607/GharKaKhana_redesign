import { Router } from 'express';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';
import * as Plans from '../controllers/plansController.js';
import * as Orders from '../controllers/ordersController.js';
import * as Refunds from '../controllers/refundsController.js';
import * as Auth from '../controllers/authController.js';

export const v1 = Router();

// Auth helper
v1.get('/auth/me', authMiddleware, Auth.me);

// Meal Plans
v1.get('/plans', Plans.list);
v1.get('/plans/:slug', Plans.getBySlug);
v1.post('/plans', authMiddleware, adminMiddleware, Plans.create);
v1.put('/plans/:id', authMiddleware, adminMiddleware, Plans.update);
v1.delete('/plans/:id', authMiddleware, adminMiddleware, Plans.remove);
v1.post('/plans/:id/image', authMiddleware, adminMiddleware, Plans.uploadImage);

// Orders & Payments
v1.post('/orders', authMiddleware, Orders.createOrder);
v1.get('/orders/:id', authMiddleware, Orders.getOrder);
v1.post('/orders/:id/confirm', authMiddleware, adminMiddleware, Orders.confirmOrder);
v1.post('/payments/razorpay/webhook', Orders.razorpayWebhook);

// Refunds
v1.post('/refund-request', authMiddleware, Refunds.createRefundRequest);
v1.get('/admin/refunds', authMiddleware, adminMiddleware, Refunds.listRefunds);
v1.post('/admin/refunds/:id/mark-refunded', authMiddleware, adminMiddleware, Refunds.markRefunded);

// Admin lists
v1.get('/admin/orders', authMiddleware, adminMiddleware, Orders.listOrders);
v1.get('/admin/customers', authMiddleware, adminMiddleware, Auth.listCustomers);


