import express from 'express';

import adminCreationRouter from './admin';

const router = express.Router();

router.use('/admin', adminCreationRouter);

export default router;
