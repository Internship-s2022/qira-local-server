import express from 'express';

import controllers from './contollers';

const router = express.Router();

router.get('/', controllers.getAllClient);
router.get('/:id', controllers.getClientById);
router.post('/', controllers.createClient);
router.patch('/:id', controllers.updateClient);
router.patch('/activate/:id', controllers.activeClient);
router.patch('/inactivate/:id', controllers.inactiveClient);

export default router;
