import mongoose, { Document } from 'mongoose';
import { ICourse } from './course';
import { IEpisodeComment } from './episodeComment';
const Schema = mongoose.Schema;


const EpisodeSchema = new Schema({
    course : { type : Schema.Types.ObjectId , ref : 'course'},
    title : { type : String , required : true} ,
    body : { type : String , required : true} ,
    videourl : { type : String , required : true} ,
    number : { type : String , required : true} ,    
    viewcount : { type : Number  , default : 0 },
    comments: [{  type: Schema.Types.ObjectId, ref: 'episodeComment' }]
},{ timestamps: true });

const Episode = mongoose.model('episode' , EpisodeSchema);

export default Episode;
export interface IEpisode extends Document {
    created_at: NativeDate;
    updated_at: NativeDate;
    course: mongoose.Types.ObjectId
    title: string;
    body: string;
    videourl: string;
    number: String;
    viewcount: Number;
    comments: mongoose.Types.ObjectId[]
}