import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

// Mongoose schemas support a timestamps option. If you set timestamps: true,
// Mongoose will add two properties of type Date to your schema:
// created_at: a date representing when this document was created
// updated_at: a date representing when this document was last updated

const UserSchema = new Schema<IUser>({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    comments: [{  type: Schema.Types.ObjectId, ref: 'product' }]
},{ timestamps: true })

UserSchema.pre('save', function (next) {
    const saltRounds = 10;
    bcrypt.hash(this.password, saltRounds, (_error, hash) => {
        // we must use arrow function in this place because we want this parameter be the parent function this parameter
        this.password = hash;
        next();
    });

});
const User = mongoose.model('user', UserSchema);

export default User;
export interface IUser extends Document {
    created_at: NativeDate;
    updated_at: NativeDate;
    firstname: string;
    phonenumber: string;
    lastname: string;
    email: string;
    password: string;
    comments: mongoose.Types.ObjectId[]
}
