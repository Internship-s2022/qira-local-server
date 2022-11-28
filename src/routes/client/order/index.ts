import express from 'express';

import { Role } from 'src/interfaces';
import { authMiddleware } from 'src/middlewares/firebase';

import * as controllers from './controllers';
import * as orderValidations from './validations';

const router = express.Router();

router
  .route('/')
  .get(authMiddleware(Role.CLIENT), controllers.getClientOrders)

  .post(orderValidations.validateOrder, controllers.createOrder);

router.route('/:id').get(controllers.getOrderById);

export default router;
