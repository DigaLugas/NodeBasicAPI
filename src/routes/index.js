import express from "express";
import booksRoute from "./booksRout.js";
import authorsRout from "./authorsRout.js";
  
const routes = (app) => {
	app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
	app.use(express.json()); // Removido o uso do middleware de livros aqui
	app.use("/books", booksRoute); // Usando o middleware de livros na rota "/livros"
	app.use("/authors", authorsRout);
};

export default routes;
