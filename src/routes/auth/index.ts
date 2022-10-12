import express from 'express';

import * as controllers from './controllers';

const router = express.Router();

router.get('/', controllers.getAuthUser);

export default router;
