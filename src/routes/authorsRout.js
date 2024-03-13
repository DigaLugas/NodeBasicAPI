import express from "express";
import AuthorController from "../controller/authorController.js";

const authorsRoute = express.Router();

authorsRoute.get("/", AuthorController.getAuthor);
authorsRoute.post("/", AuthorController.cadasterAuthor);
authorsRoute.get("/:id", AuthorController.showAuthorById);
authorsRoute.put("/:id", AuthorController.updateAuthor);
authorsRoute.delete("/:id", AuthorController.deleteAuthor);

export default authorsRoute;
