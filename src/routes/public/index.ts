import express from 'express';

import categoriesRouter from './categories';
import ordersRouter from './orders';
import productsRouter from './products';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);

export default router;
