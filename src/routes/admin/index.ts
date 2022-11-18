import express from 'express';

import categoryRouter from './category';
import clientRouter from './client';
import ordersRouter from './order';
import productRouter from './product';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/client', clientRouter);
router.use('/product', productRouter);
router.use('/orders', ordersRouter);

export default router;
