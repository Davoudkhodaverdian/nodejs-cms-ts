import express from 'express';
import { Request, Response } from 'express';
import productRouter from './products';
import userRouter from './users';
import courseRouter from './courses';
import episodeRouter from './episodes';
const router = express.Router();

router.get('/', (req: Request, res: Response)=>{
    res.send(`admin router`);
});
router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/courses', courseRouter);
router.use('/episodes', episodeRouter);
export default router;