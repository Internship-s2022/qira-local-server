import express from 'express';

import ordersRouter from './order';

const router = express.Router();

router.use('/orders', ordersRouter);

export default router;
