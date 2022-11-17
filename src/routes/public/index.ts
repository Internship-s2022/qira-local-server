import express from 'express';

import { Role } from 'src/interfaces';
import { authMiddleware } from 'src/middlewares/firebase';

import categoriesRouter from './categories';
import ordersRouter from './orders';
import productsRouter from './products';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/orders', authMiddleware(Role.CLIENT), ordersRouter);

export default router;
