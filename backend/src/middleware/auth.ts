import { Request, Response, NextFunction } from 'express';
import { prisma } from '../db/prisma.js';
import { verifySupabaseJWT } from '../services/supabaseService.js';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: 'CUSTOMER' | 'ADMIN'; supabase_user_id: string };
    }
  }
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'Missing Authorization header' });
    const token = auth.replace('Bearer ', '').trim();
    const decoded = verifySupabaseJWT(token);
    const supabaseUserId = decoded.sub;

    let user = await prisma.user.findUnique({ where: { supabase_user_id: supabaseUserId } });
    if (!user) {
      // Auto-create minimal user; client should update details later
      user = await prisma.user.create({
        data: {
          phone: `+91${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
          address_line1: 'TBD',
          city: 'TBD',
          pincode: '000000',
          state: 'TBD',
          supabase_user_id: supabaseUserId
        }
      });
    }

    req.user = { id: user.id, role: user.role, supabase_user_id: user.supabase_user_id } as any;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export function adminMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  if (req.user.role !== 'ADMIN') return res.status(403).json({ message: 'Forbidden' });
  next();
}


