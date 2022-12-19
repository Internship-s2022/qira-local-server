import express from 'express';

import ordersRouter from './order';
import ProfileRouter from './profile';

const router = express.Router();

router.use('/orders', ordersRouter);
router.use('/profile', ProfileRouter);

export default router;
