import { Express } from 'express';
import bodyParser from 'body-parser';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';

import session from 'express-session';
import flash from 'connect-flash';


export const setConfig = (app: Express, db: string) => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(session({
        secret: 'mySecretkey',
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: db })
    }));
    app.use(cookieParser("mySecretkey"));
    app.use(flash());

}
