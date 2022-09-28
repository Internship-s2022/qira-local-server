import express from 'express';

import controllers from './controllers';
import categoryValidation from './validations';

const router = express.Router();

router.get('/', controllers.getAllCategories);
router.get('/:id', controllers.getCategoryById);
router.post('/', categoryValidation.validateCategory, controllers.createCategory);
router.patch('/:id', categoryValidation.validateCategoryUpdate, controllers.updateCategory);
router.patch('/delete/:id', controllers.deleteCategory);
router.patch('/activate/:id', controllers.activeCategory);
router.patch('/inactivate/:id', controllers.inactiveCategory);

export default router;
