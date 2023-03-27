import express from 'express';
import { setupExpress } from './setup/express';
import { setMongoConnection } from './setup/mongoConnection';
import { setConfig } from './setup/config';
import { setRouter } from './setup/router';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' }); // for process.env
dotenv.config({ path: '.env' }); // for process.env

// const db =  "mongodb://localhost/nodejscms" // development environment
const db = process.env.NODE_ENV === 'development' ? "mongodb://localhost/nodejscms" : process.env.MONGODB_Address;

const app = express();

class Application {
    constructor() {
        // setup
        setupExpress(app);
        setMongoConnection(db);
        setConfig(app,db);
        setRouter(app);
    }

}
export default Application;