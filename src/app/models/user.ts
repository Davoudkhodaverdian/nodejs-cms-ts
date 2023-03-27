import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';
import { IProduct } from './product';

// Mongoose schemas support a timestamps option. If you set timestamps: true,
// Mongoose will add two properties of type Date to your schema:
// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    comments: [{  type: Schema.Types.ObjectId, ref: 'product' }]
},{ timestamps: true })

UserSchema.pre('save', function (next) {
    const saltRounds = 10;
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        this.password = hash;
        next();
    });

});
const User = mongoose.model('user', UserSchema);

export default User;
export interface IUser extends Document {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    firstName: string;
    lastName: string;
    email: string;
    password: String;
    comments: mongoose.Types.ObjectId[]
}