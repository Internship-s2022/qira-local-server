import express from 'express';

import controllers from './controllers';

const router = express.Router();

router.get('/', controllers.getAllCategories);
router.get('/:id', controllers.getCategoryById);
router.post('/', controllers.createCategory);
router.patch('/:id', controllers.updateCategory);
router.delete('/:id', controllers.deleteCategory);

export default router;
