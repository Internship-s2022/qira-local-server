import express from 'express';

import categoryRouter from './category';
import userRouter from './user';

const router = express.Router();

router.use('/user', userRouter);
router.use('/category', categoryRouter);

export default router;
