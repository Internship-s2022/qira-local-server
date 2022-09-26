import express from 'express';

import controllers from './contollers';

const router = express.Router();

router.get('/', controllers.getAllClient);
router.get('/:id', controllers.getClientById);
// router.post('/', controllers.createClient);
// router.patch('/:id', controllers.editClient);
// router.put('/:id', controllers.deleteClient);

export default router;
