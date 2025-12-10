import Book from "../models/Book.js";
import Author from "../models/Author.js";

export const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();

    res.status(201).json({
      success: true,
      message: "Author created",
      data: author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occured",
      error: error.message,
    });
  }
};

export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();

    res.status(201).json({
      success: true,
      message: "Book created",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occured",
      error: error.message,
    });
  }
};
export const getBookWithAuthor = async (req, res) => {
  try {
    //const id = req.params.id;
    const book = await Book.findById(req.params.id).populate("author");

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    //await book.save();

    res.status(200).json({
      success: true,
      message: "Successfully gotten Book with Author",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occured",
      error: error.message,
    });
  }
};
