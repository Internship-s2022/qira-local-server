import express from 'express';

import categoryRouter from './category';
import clientRouter from './client';
import productRouter from './product';
import userRouter from './user';

const router = express.Router();

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/client', clientRouter);
router.use('/product', productRouter);

export default router;
