import express from 'express';

import { getAllCategories } from './controllers';

const router = express.Router();

router.route('/').get(getAllCategories);

export default router;
