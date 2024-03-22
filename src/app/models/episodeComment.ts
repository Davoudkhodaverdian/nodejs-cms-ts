import mongoose, { Document } from 'mongoose';
import { IUser } from './user';
import { IEpisode } from './episode';
const Schema = mongoose.Schema;


const EpisodeSchema = new Schema({
    user : { type : Schema.Types.ObjectId , ref : 'user'},
    episode : { type : Schema.Types.ObjectId , ref : 'episode'},
    body : { type : String , required : true} ,

},{ timestamps: true });


const EpisodeComment = mongoose.model('episode' , EpisodeSchema);
export default EpisodeComment;
export interface IEpisodeComment extends Document {
    created_at: NativeDate;
    updated_at: NativeDate;
    body: string;
    user: mongoose.Types.ObjectId
    episode: mongoose.Types.ObjectId
}