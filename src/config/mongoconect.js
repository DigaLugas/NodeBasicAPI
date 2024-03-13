import mongoose from "mongoose";

async function conectarBanco() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Conexão com o MongoDB estabelecida com sucesso");
		return mongoose.connection;
	} catch (error) {
		console.error("Erro ao conectar com o MongoDB:", error.message);
		throw error;
	}
}
  
export default conectarBanco;