import books from "../models/Books.js";
import { author } from "../models/Author.js";

class BookController {
	static async getBooks(req, res) {
		const listaLivros = await books.find({});
		res.status(200).json(listaLivros);
	}

	static async cadasterBook(req, res) {
		const newBook = req.body;
		try {
			const foundAuthor = await author.findById(newBook.author);
			const allBook = {... newBook, author: {...foundAuthor._doc}};
			const createdBook = await books.create(allBook);
			res.status(201).json({ message: "Livro Criado", book: createdBook });
		} catch (error) {
			res.status(500).json({ message: `${error.message} - Falha ao cadastrar o livro` });
		}
        
	}
	static async showBookById (req, res) {
		try {
			const id = req.params.id;
			const foundBook = await books.findById(id);
			res.status(200).json(foundBook);
		} catch (erro) {
			res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
		}
	}
	static async updateBook (req, res) {
		try {
			const id = req.params.id;
			await books.findByIdAndUpdate(id, req.body);
			res.status(200).json({ message: "Livro Atualizado" });
		} catch (erro) {
			res.status(500).json({ message: `${erro.message} - Falha na Atualização` });
		}
	}
	static async deleteBook (req, res){
		try {
			const id = req.params.id;
			await books.findByIdAndDelete(id);
			res.status(204).send("Livro Deletado com sucesso");
		} catch (error) {
			res.status(500).json({ message: `${error.message} - Falha ao Deletar Livro` });
		}
	}
	static async getBooksByPublishCompany(req, res){
		const publishCompany = req.query.publishing_company;
		try {
			const bookByPublishCompany = await books.find({publishing_company: publishCompany });
			res.status(200).json(bookByPublishCompany);
		} catch (error) {
			res.status(500).json({ message: `${error.message} - falha na requisição do livro` });
		}
	}
      
    
}

export default BookController;
