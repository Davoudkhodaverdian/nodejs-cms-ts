import express from 'express';
import { Request, Response } from 'express';
import productController from './../../../http/controllers/api/productController';

const router = express.Router();

router.get('/',productController.index);


export default router;