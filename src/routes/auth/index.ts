import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';
import { Role } from 'src/interfaces';
import { createFirebaseUser } from 'src/middlewares/firebase';

import { clientSchema } from '../admin/client/validations';
import * as controllers from './controllers';

const router = express.Router();

router
  .route('/user')
  .get(controllers.getUser)
  .post(validateFunction(clientSchema), createFirebaseUser(Role.CLIENT), controllers.createClient);

export default router;
