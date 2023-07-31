import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Connection to dataBase sucess")
})

const app = express();

app.use(express.json())

// const livros = [
//     { id: 1, 'titulo': 'Lord of the Rings' },
//     { id: 2, 'titulo': 'Hobbit' }
// ]

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })
});

app.get('/livros/:id', (req, res) => {
    const index = searchBook(req.params.id);
    res.status(200).json(livros[index])
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    const index = searchBook(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(202).json(livros[index])
});

app.delete('/livros/:id', (req,res) => {
    const {id} = req.params
    const index = searchBook(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} foi removido com sucesso!`);
})

function searchBook(id) {
    return livros.findIndex(livro =>
        livro.id == id
    )
}

export default app;