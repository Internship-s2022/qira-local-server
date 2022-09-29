import express from 'express';

import * as controllers from './controllers';
import * as clientValidations from './validations';

const router = express.Router();

router
  .route('/')
  .get(controllers.getAllClient)
  .post(clientValidations.validateClient, controllers.createClient);
router
  .route('/:id')
  .get(controllers.getClientById)
  .patch(clientValidations.validateClientUpdate, controllers.updateClient);

router.patch('/activate/:id', controllers.activeClient);
router.patch('/inactivate/:id', controllers.inactiveClient);
router.patch('/delete/:id', controllers.deleteClient);

export default router;
