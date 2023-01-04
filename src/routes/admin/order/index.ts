import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';

import * as controllers from './controllers';
import { invoiceSchema, signedInvoiceSchema } from './validations';

const router = express.Router();

router.route('/').get(controllers.getAllOrders);

router.route('/:id').get(controllers.getOrderById);

router.route('/approve/:id').patch(validateFunction(invoiceSchema), controllers.approveOrder);

router.route('/reject/:id').patch(controllers.rejectOrder);

router
  .route('/deliver/:id')
  .get(controllers.getOrderToDeliver)
  .patch(validateFunction(signedInvoiceSchema), controllers.deliverOrder);

export default router;
