import express from "express"
import cors from "cors"
import "dotenv/config"
import routes from "./routes/usuarios.routes"

import conexaoDb from "../config/database"

conexaoDb();

const app = express();

app.use(cors())

const port = process.env.PORT_SERVER;

app.use(express.json()); //BodyParser pra ele aceitar json

app.use('/', routes);

app.listen(port, () => {
	console.log('Servidor iniciado na porta: ' + port);
});