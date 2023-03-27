import { Express } from 'express';
import homeRouter from './../../routes';

export const setRouter = (app: Express) => {

        //  app.get('/', (req, res) => {
        //     res.send('Hello World!');
        // });
        app.use('/', homeRouter);
}
