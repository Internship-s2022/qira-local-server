import express from 'express';

import * as controllers from './controllers';
import * as orderValidations from './validations';

const router = express.Router();

router.route('/').get(controllers.getAllOrders);

router.route('/:id').get(controllers.getOrderById);

router.route('/approve/:id').patch(orderValidations.validateInvoiceOrder, controllers.approveOrder);

router.route('/reject/:id').patch(controllers.rejectOrder);

router
  .route('/deliver/:id')
  .get(controllers.getOrderToDeliver)
  .patch(orderValidations.validateSignedInvoiceOrder, controllers.deliverOrder);

export default router;
