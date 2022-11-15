import express from "express";
import db from "./config/db_connect.js";
import routes from "./routes/index.js";
import cors from "cors";
const cors_func = cors()

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", ()=> {
        console.log("conexao feita com sucesso"); 
}); 

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors_func());
    app.use(express.json()) 
    next();
});
routes(app)

export default app;