import express from 'express';
import episodeController from '../../../../http/controllers/api/admin/episodeController';


const router = express.Router();

router.get('/',episodeController.index);
router.post('/',episodeController.createEpisode);


export default router;