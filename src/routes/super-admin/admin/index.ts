import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';
import { Role } from 'src/interfaces';
import { createFirebaseUser } from 'src/middlewares/firebase';

import * as controllers from './controllers';
import { adminSchema } from './validations';

const router = express.Router();

router
  .route('/')
  .post(validateFunction(adminSchema), createFirebaseUser(Role.ADMIN), controllers.createAdmin);

export default router;
