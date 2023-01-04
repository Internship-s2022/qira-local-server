import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';

import * as controllers from './controllers';
import { categorySchema, updateCategorySchema } from './validations';

const router = express.Router();

router
  .route('/')
  .get(controllers.getAllCategories)
  .post(validateFunction(categorySchema), controllers.createCategory);

router
  .route('/:id')
  .get(controllers.getCategoryById)
  .patch(validateFunction(updateCategorySchema), controllers.updateCategory);

router.route('/delete/:id').patch(controllers.deleteCategory);

router.route('/activate/:id').patch(controllers.activeCategory);

router.route('/inactivate/:id').patch(controllers.inactiveCategory);

export default router;
