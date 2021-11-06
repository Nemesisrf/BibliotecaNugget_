import book from "../models/book.js";

const registerBook = async (req, res) => {
  if (!req.body.name || !req.body.autor || !req.body.category || !req.body.publicationDate)
    res.status(400).send("Incomplete data");

  const existingBook = await book.findOne({ name: req.body.name });

  if (existingBook) return res.status(400).send("The book already exist");

  const bookSchema = new book({
    name: req.body.name,
    autor: req.body.autor,
    category: req.body.category,
    publicationDate: req.body.publicationDate,
    dbstatus: true,
  });
 
  const result = await bookSchema.save();

  if (!result) return res.status(400).send("Failed to regster book");

  res.status(200).send({ result });
};
export default {registerBook};
