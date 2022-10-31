import express from 'express';

import { getProductById } from 'src/routes/admin/product/controllers';

import { getAllProducts } from './controllers';

const router = express.Router();

router.route('/').get(getAllProducts);

router.route('/:id').get(getProductById);

export default router;
