import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, match: [/^\S+@\S+$/, "Email format not correct"] },
    password: { type: String, required: true, match: [/[a-zA-Z]*[0-9]{1}/, "1 number"] },
    watchList: [{ type: String }]
}, { collection: "MEANCryptoUsers", toObject: { versionKey: false } });
export const UserModel = model('user', userSchema);
//# sourceMappingURL=user.schema.js.map