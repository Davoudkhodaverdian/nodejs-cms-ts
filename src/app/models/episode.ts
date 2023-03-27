import mongoose, { Document } from 'mongoose';
import { ICourse } from './course';
import { IEpisodeComment } from './episodeComment';
const Schema = mongoose.Schema;


const EpisodeSchema = new Schema({
    course : { type : Schema.Types.ObjectId , ref : 'course'},
    title : { type : String , required : true} ,
    body : { type : String , required : true} ,
    videoUrl : { type : String , required : true} ,
    number : { type : String , required : true} ,    
    viewCount : { type : Number  , default : 0 },
    comments: [{  type: Schema.Types.ObjectId, ref: 'episodeComment' }]
},{ timestamps: true });

const Episode = mongoose.model('episode' , EpisodeSchema);

export default Episode;
export interface IEpisode extends Document {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    course: mongoose.Types.ObjectId
    title: string;
    body: string;
    videoUrl: string;
    number: String;
    viewCount: Number;
    comments: mongoose.Types.ObjectId[]
}