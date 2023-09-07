import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Connection to dataBase sucess")
})

const app = express();

app.use(express.json())

routes(app)

export default app;