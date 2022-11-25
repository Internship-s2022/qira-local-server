import express from 'express';

import { Role } from 'src/interfaces';
import { authMiddleware } from 'src/middlewares/firebase';

import * as controllers from './controllers';
import * as clientValidations from './validations';

const router = express.Router();

router
  .route('/update')
  .patch(
    clientValidations.validateUpdateClientInformation,
    authMiddleware(Role.CLIENT),
    controllers.updateClientInformation,
  );

export default router;
