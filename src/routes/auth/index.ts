import express from 'express';

import * as controllers from './controllers';

const router = express.Router();

router.get('/user', controllers.getUser);

export default router;
