import mongoose from 'mongoose';
import type { User } from '../../shared/models/user.model'
const { Schema, model } = mongoose;


const userSchema = new Schema<User>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

export const UserModel = model<User>('User', userSchema)