import express from 'express';

import { validateFunction } from 'src/helper/joi-validations';

import * as controllers from './controllers';
import { updateClientPasswordSchema, updateClientSchema } from './validations';

const router = express.Router();

router.route('/').get(controllers.getAllClient);

router
  .route('/:id')
  .get(controllers.getClientById)
  .patch(validateFunction(updateClientSchema), controllers.updateClient);

router.patch('/activate/:id', controllers.activeClient);

router.patch('/inactivate/:id', controllers.inactiveClient);

router.patch('/delete/:id', controllers.deleteClient);

router.patch('/approve/:id', controllers.approveClient);

router.patch(
  '/password/:id',
  validateFunction(updateClientPasswordSchema),
  controllers.updatePassword,
);

export default router;
