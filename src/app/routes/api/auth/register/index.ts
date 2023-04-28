import express from 'express';
import registerController from '../../../../http/controllers/api/auth/registerController';
const router = express.Router();
// registerController sended as this in registerController
router.post('/register', registerController.validators,
    registerController.validate.bind(registerController), registerController.index.bind(registerController)
);

export default router;