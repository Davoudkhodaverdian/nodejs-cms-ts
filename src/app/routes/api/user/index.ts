import express from 'express';
import userController from '../../../http/controllers/api/userController';
import verifyAuthToken from '../../../http/middlewares/auth';

const router = express.Router();

router.get('/', verifyAuthToken, userController.user);


export default router;