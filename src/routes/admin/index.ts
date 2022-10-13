import express from 'express';

import categoryRouter from './category/index';
import clientRouter from './client/index';
import productRouter from './product/index';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/client', clientRouter);
router.use('/product', productRouter);

export default router;
