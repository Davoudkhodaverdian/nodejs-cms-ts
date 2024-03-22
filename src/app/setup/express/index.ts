import http from 'http';
import { config } from './../../config';
import { Express } from 'express';
import cors from 'cors';
const port = config.port;

export const setupExpress = (app: Express) => {

    // app.listen(port, () => {
    //   return console.log(`Express is listening at http://localhost:${port}`);
    // });
    // Enable CORS Requests Cross-origin resource sharing (CORS)
    app.use(cors({
        origin: process.env.NODE_ENV === 'production' ? process.env.NEXT_APP_DOMAIN : 'http://localhost:3000',
        credentials: true
    }));
    const server = http.createServer(app);
    server.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });

}
