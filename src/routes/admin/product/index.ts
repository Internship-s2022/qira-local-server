import express from 'express';

import * as controllers from './controllers';
import * as productValidations from './validations';

const router = express.Router();

router
  .route('/')
  .get(controllers.getAllProducts)
  .post(productValidations.validateProduct, controllers.createProduct);

router
  .route('/:id')
  .get(controllers.getProductById)
  .patch(productValidations.validateProductUpdate, controllers.updateProduct);

router.route('/delete/:id').patch(controllers.deleteProduct);

router.route('/activate/:id').patch(controllers.activeProduct);

router.route('/inactivate/:id').patch(controllers.inactiveProduct);

export default router;
