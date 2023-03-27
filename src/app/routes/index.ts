import express from 'express';
import homeController from '../http/controllers/homeController';
import apiRouter from './api';

const router = express.Router();

router.get('/', homeController.index);
router.use('/api', apiRouter);

export default router;
