import express from 'express';
import registerController from '../../../../http/controllers/api/auth/registerController';
const router = express.Router();

router.post('/register',registerController.index);

export default router;