import express from 'express';

import { Role } from 'src/interfaces';
import { createFirebaseUser } from 'src/middlewares/firebase';

import * as controllers from './controllers';
import * as adminValidations from './validations';

const router = express.Router();

router
  .route('/')
  .post(adminValidations.validateAdmin, createFirebaseUser(Role.ADMIN), controllers.createAdmin);

export default router;
