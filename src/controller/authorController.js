import { author } from "../models/Author.js";

class AuthorController {
	static async getAuthor(req, res) {
		try {
			const listaAutores = await author.find({});
			res.status(200).json(listaAutores);
		} catch (error) {
			res.status(500).send("Erro do Servidor");
		}
		

	}

	static async cadasterAuthor(req, res) {
		try {
			const newAuthor = await author.create(req.body);
			res.status(201).json({ message: "Autor Criado", author: newAuthor });
		} catch (error) {
			res.status(500).json({ message: `${error.message} - Falha ao cadastrar o Autor` });
		}
        
	}
	static async showAuthorById (req, res) {
		try {
			const id = req.params.id;
			const foundAuthor = await author.findById(id);
			res.status(200).json(foundAuthor);
		} catch (erro) {
			res.status(500).json({ message: `${erro.message} - falha na requisição do Autor` });
		}
	}
	static async updateAuthor (req, res) {
		try {
			const id = req.params.id;
			await author.findByIdAndUpdate(id, req.body);
			res.status(200).json({ message: "Autor Atualizado" });
		} catch (erro) {
			res.status(500).json({ message: `${erro.message} - Falha na Atualização` });
		}
	}
	static async deleteAuthor (req, res){
		try {
			const id = req.params.id;
			await author.findByIdAndDelete(id);
			res.status(204).send("Autor Deletado com sucesso");
		} catch (error) {
			res.status(500).json({ message: `${error.message} - Falha ao Deletar Autor` });
		}
	}
    
    
}

export default AuthorController;
