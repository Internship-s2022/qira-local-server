import express from 'express';

import categoryRouter from './category';
import clientRouter from './client';
import userRouter from './user';

const router = express.Router();

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/client', clientRouter);

export default router;
