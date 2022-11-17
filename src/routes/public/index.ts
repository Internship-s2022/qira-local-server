import express from 'express';

import categoriesRouter from './categories';
import productsRouter from './products';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);

export default router;
