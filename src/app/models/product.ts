import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'user' },
    title: { type: String, required: true },
    body: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: false },
    comments: [{  type: Schema.Types.ObjectId, ref: 'productComment' }]

},{ timestamps: true })


const Product = mongoose.model('product', ProductSchema);

export default Product;
export interface IProduct extends Document {
    created_at: NativeDate;
    updated_at: NativeDate;
    title: string;
    body: string;
    price: string;
    comments: mongoose.Types.ObjectId[];
    user?: mongoose.Types.ObjectId;
    image?: string;

}