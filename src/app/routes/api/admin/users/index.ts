import express from 'express';
import userController from '../../../../http/controllers/api/admin/userController';

const router = express.Router();

router.get('/',userController.index);
router.post('/',userController.createUser);


export default router;