import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';

import * as controllers from './controllers';
import { orderSchema } from './validations';

const router = express.Router();

router
  .route('/')
  .get(controllers.getClientOrders)

  .post(validateFunction(orderSchema), controllers.createOrder);

router.route('/:id').get(controllers.getOrderById);

export default router;
