import express from 'express';

import * as controllers from './controllers';
import * as orderValidations from './validations';

const router = express.Router();

router.route('/').post(orderValidations.validateOrder, controllers.createOrder);

export default router;
