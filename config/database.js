import mongoose from 'mongoose'

function conexaoDb(){
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectado ao banco de dados com sucesso!"));
}
import "../src/models/users.model"

export default conexaoDb;