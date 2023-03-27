import express from 'express';
import loginController from '../../../../http/controllers/api/auth/loginController';

const router = express.Router();

router.post('/login', loginController.validators, loginController.validate, loginController.index);
router.get('/login', loginController.createUserSample);

export default router;