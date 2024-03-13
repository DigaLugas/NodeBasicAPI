import express from "express";
import BookController from "../controller/bookController.js";

const booksRoute = express.Router();

booksRoute.get("/", BookController.getBooks);
booksRoute.get("/search", BookController.getBooksByPublishCompany);
booksRoute.get("/:id", BookController.showBookById);
booksRoute.post("/", BookController.cadasterBook);
booksRoute.put("/:id", BookController.updateBook);
booksRoute.delete("/:id", BookController.deleteBook);


export default booksRoute;
