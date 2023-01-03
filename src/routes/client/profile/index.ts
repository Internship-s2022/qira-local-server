import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';

import * as controllers from './controllers';
import { clientSchema } from './validations';

const router = express.Router();

router.route('/update').patch(validateFunction(clientSchema), controllers.updateClientInformation);

router
  .route('/update/password')
  .patch(clientValidations.validateUpdatePassword, controllers.updatePassword);
export default router;
