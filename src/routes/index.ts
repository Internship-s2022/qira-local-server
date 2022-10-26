import express from 'express';

import { Role } from 'src/interfaces';
import { authMiddleware } from 'src/middlewares/firebase';

import adminRouter from './admin/index';
import authRouter from './auth';
import publicRouter from './public';

const router = express.Router();

router.use('/admin', authMiddleware(Role.ADMIN), adminRouter);
router.use('/auth', authRouter);
router.use('/public', publicRouter);

export default router;
