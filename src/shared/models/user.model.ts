import * as mongoose from 'mongoose';

export interface User {
    firstName: string,
    lastName: string,
    email: string, 
    password: string,
    _id: {type: mongoose.Types.ObjectId}
}