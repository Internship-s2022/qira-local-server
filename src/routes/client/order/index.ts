import express from 'express';

import * as controllers from './controllers';
import * as orderValidations from './validations';

const router = express.Router();

router
  .route('/')
  .get(controllers.getClientOrders)

  .post(orderValidations.validateOrder, controllers.createOrder);

router.route('/:id').get(controllers.getOrderById);

export default router;
