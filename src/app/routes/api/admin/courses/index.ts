import express from 'express';
import courseController from '../../../../http/controllers/api/admin/courseController';


const router = express.Router();

router.get('/',courseController.index);
router.post('/',courseController.createCource);

export default router;