import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  autor: String,
  category: String,
  dbstatus: Boolean,
  publicationDate: { type: Date },
 
});

const book = mongoose.model("books", bookSchema);

export default book;