import express from 'express';

import { Role } from 'src/interfaces';
import { authMiddleware } from 'src/middlewares/firebase';

import * as controllers from './controllers';

const router = express.Router();

router.use('/data', authMiddleware(Role.CLIENT), controllers.getClientData);

export default router;
