import express from 'express';

import { getExchangeRate } from './controllers';

const router = express.Router();

router.route('/').get(getExchangeRate);

export default router;
