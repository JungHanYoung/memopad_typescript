import { Schema, Model, Document, model } from 'mongoose';

interface IMemo {
	writer: string;
	contents: string;
	starred: string[];
	date: {
		created: Date;
		edited: Date;
	};
	is_edited: boolean;
}

interface IMemoModel extends IMemo, Document {}

const memoSchema = new Schema({
	writer: String,
	contents: String,
	starred: [ String ],
	date: {
		created: { type: Date, default: Date.now },
		edited: { type: Date, default: Date.now }
	},
	is_edited: Boolean
});

export const Memo: Model<IMemoModel> = model<IMemoModel>('memo', memoSchema);
