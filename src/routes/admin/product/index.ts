import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';

import * as controllers from './controllers';
import { productSchema, updateProductSchema } from './validations';

const router = express.Router();

router
  .route('/')
  .get(controllers.getAllProducts)
  .post(validateFunction(productSchema), controllers.createProduct);

router
  .route('/:id')
  .get(controllers.getProductById)
  .patch(validateFunction(updateProductSchema), controllers.updateProduct);

router.route('/delete/:id').patch(controllers.deleteProduct);

router.route('/activate/:id').patch(controllers.activeProduct);

router.route('/inactivate/:id').patch(controllers.inactiveProduct);

export default router;
