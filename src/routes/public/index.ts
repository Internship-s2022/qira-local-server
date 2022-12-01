import express from 'express';

import categoriesRouter from './categories';
import exchangeRateRouter from './exchangeRate';
import productsRouter from './products';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/exchange-rate', exchangeRateRouter);

export default router;
