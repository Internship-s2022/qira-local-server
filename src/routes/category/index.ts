import express from 'express';

import controllers from './controllers';

const router = express.Router();

router.get('/', controllers.getAllCategories);
router.get('/:id', controllers.getCategoryById);

export default router;
