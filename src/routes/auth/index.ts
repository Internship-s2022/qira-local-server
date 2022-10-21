import express from 'express';

import { Role } from 'src/interfaces';
import { createFirebaseUser } from 'src/middlewares/firebase';

import * as clientValidations from '../admin/client/validations';
import * as controllers from './controllers';

const router = express.Router();

router
  .route('/user')
  .get(controllers.getUser)
  .post(
    clientValidations.validateClient,
    createFirebaseUser(Role.CLIENT),
    controllers.createClient,
  );

export default router;
