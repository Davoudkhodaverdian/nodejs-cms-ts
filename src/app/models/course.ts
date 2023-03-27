import mongoose, { Document, Model } from 'mongoose';
const Schema = mongoose.Schema;



const CourseSchema = new Schema({
    user : { type : Schema.Types.ObjectId , ref : 'user'},
    title : { type : String , required : true} ,
    body : { type : String , required : true} ,
    price : { type : String , required : true} ,
    image : { type : String } ,    
    episodes : [{ type : Schema.Types.ObjectId , ref : 'episode'}]
},{ timestamps: true });


const Course = mongoose.model('course' , CourseSchema);
export default Course;
export interface ICourse extends Document {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    user: mongoose.Types.ObjectId
    title: string;
    body: string;
    price: string;
    image: String;
    episodes: mongoose.Types.ObjectId[]
}
   
