import "dotenv/config";
import app from "./src/app.js";



// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
	console.log("Servidor Ligado!");
});
