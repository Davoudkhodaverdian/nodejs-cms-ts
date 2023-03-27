import express from 'express';
import { Request, Response } from 'express';
import productController from '../../../../http/controllers/api/admin/productController';

const router = express.Router();

router.get('/',productController.index);

router.get('/:id',productController.product);

router.post('/',productController.createProduct);

router.put('/:id', productController.changeProduct);

router.delete('/:id',productController.removeProduct);

export default router;