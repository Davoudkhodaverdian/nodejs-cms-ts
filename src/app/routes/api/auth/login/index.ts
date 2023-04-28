import express from 'express';
import loginController from '../../../../http/controllers/api/auth/loginController';

const router = express.Router();
// loginController sended as this in loginController
router.post('/login', loginController.validators,
    loginController.validate.bind(loginController), loginController.index.bind(loginController)
);

export default router;