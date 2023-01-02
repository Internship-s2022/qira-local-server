import express from 'express';

import * as controllers from './controllers';
import * as clientValidations from './validations';

const router = express.Router();

router
  .route('/update')
  .patch(clientValidations.validateUpdateClientInformation, controllers.updateClientInformation);

router
  .route('/update/password')
  .patch(clientValidations.validateUpdatePassword, controllers.updatePassword);
export default router;
