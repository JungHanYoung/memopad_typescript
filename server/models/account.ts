import { Schema, Document, Model, model } from "mongoose";
import * as bcrypt from 'bcryptjs';

interface IAccount {
    username: string;
    password: string;
    created: Date;
}

interface IAccountModel extends IAccount, Document {
    generateHash: (password: string) => string;
    validateHash: (password: string) => boolean;
}

const accountSchema = new Schema({
    username: String,
    password: String,
    created: { type: Date, default: Date.now }
});

accountSchema.methods.generateHash = (password: string): string => {
    return bcrypt.hashSync(password, 8);
}

accountSchema.methods.validateHash = function(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
}

export const Account: Model<IAccountModel> = model<IAccountModel>('account', accountSchema)