import mongoose, { Document } from 'mongoose';
import { IUser } from './user';
import { IProduct } from './product';
const Schema = mongoose.Schema;


const ProductCommentSchema = new Schema({
    user : { type : Schema.Types.ObjectId , ref : 'user'},
    product : { type : Schema.Types.ObjectId , ref : 'product'},
    body : { type : String , required : true} ,

},{ timestamps: true });


const ProductComment = mongoose.model('productComment' , ProductCommentSchema);
export default ProductComment;
export interface IProductComment extends Document {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    body: string;
    user: mongoose.Types.ObjectId
    product: mongoose.Types.ObjectId
}