import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
	id: { type: mongoose.Schema.Types.ObjectId },
	name: { type: String, required: true },
	publishing_company: { type: String },
	price: { type: Number, required: true },
	pages: { type: Number },
	author: authorSchema
}, { versionKey: false });

const books = mongoose.model("books", bookSchema);

export default books;
