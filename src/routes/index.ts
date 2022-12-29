import express from 'express';

import { Role } from 'src/interfaces';
import { authMiddleware } from 'src/middlewares/firebase';

import adminRouter from './admin/index';
import authRouter from './auth';
import clientRouter from './client';
import publicRouter from './public';
import superAdminRouter from './super-admin';

const router = express.Router();

router.use('/admin', authMiddleware(Role.ADMIN), adminRouter);
router.use('/auth', authRouter);
router.use('/public', publicRouter);
router.use('/client', authMiddleware(Role.CLIENT), clientRouter);
router.use('/super-admin', authMiddleware(Role.SUPERADMIN), superAdminRouter);

export default router;
