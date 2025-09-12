import { Router } from 'express';
import { v1 } from './v1.js';

export const router = Router();

router.use('/v1', v1);


