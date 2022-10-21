import express from 'express';

import * as controllers from './controllers';
import * as categoryValidation from './validations';

const router = express.Router();

router
  .route('/')
  .get(controllers.getAllCategories)
  .post(categoryValidation.validateCategory, controllers.createCategory);

router
  .route('/:id')
  .get(controllers.getCategoryById)
  .patch(categoryValidation.validateCategoryUpdate, controllers.updateCategory);

router.route('/delete/:id').patch(controllers.deleteCategory);

router.route('/activate/:id').patch(controllers.activeCategory);

router.route('/inactivate/:id').patch(controllers.inactiveCategory);

export default router;
