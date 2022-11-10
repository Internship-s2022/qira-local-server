import express from 'express';

import categoriesRouter from './categories';
import orderRouter from './order';
import productsRouter from './products';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/order', orderRouter);

export default router;
