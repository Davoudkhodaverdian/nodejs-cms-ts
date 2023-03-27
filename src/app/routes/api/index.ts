import express from 'express';
import homeController from '../../http/controllers/api/apiController';
import authRouter from './auth';
import adminRouter from './admin';
import productsRouter from './products';

const router = express.Router();

router.get('/', homeController.index);
router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/products', productsRouter);
export default router;