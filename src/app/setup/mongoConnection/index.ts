import mongoose from 'mongoose';
import { config } from './../../config';
const port = config.port;

export const setMongoConnection = (db : string) => {
    
    mongoose.set('strictQuery', false);
    mongoose.Promise = global.Promise;
    mongoose.connect(db);

}
