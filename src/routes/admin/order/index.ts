import express from 'express';

import * as controllers from './controllers';

const router = express.Router();

router.route('/').get(controllers.getAllOrders);

router.route('/:id').get(controllers.getOrderById);

export default router;
