import express from "express";
import conectarBanco from "./config/mongoconect.js";
import routes from "./routes/index.js";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const conexao = await conectarBanco();

const app = express();
routes(app);
  
app.use((erro, res)=>
{
	res.status(500).send({message: "erro interno do serviodor"});
});

export default app;
