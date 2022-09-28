import express from 'express';

import controllers from './contollers';
import clientValidations from './validations';

const router = express.Router();

router.get('/', controllers.getAllClient);
router.get('/:id', controllers.getClientById);
router.post('/', clientValidations.validateClient, controllers.createClient);
router.patch('/:id', clientValidations.validateClientUpdate, controllers.updateClient);
router.patch('/activate/:id', controllers.activeClient);
router.patch('/inactivate/:id', controllers.inactiveClient);

export default router;
