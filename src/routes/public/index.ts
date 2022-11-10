import express from 'express';

import { Role } from 'src/interfaces';
import { authMiddleware } from 'src/middlewares/firebase';

import categoriesRouter from './categories';
import orderRouter from './order';
import productsRouter from './products';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/order', authMiddleware(Role.CLIENT), orderRouter);

export default router;
