import express from "express";
import LivroController from "../controller/livrosController";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivrosPorID)
    .post("/livros", LivroController.cadastrarLivros)
    .put("/livros/:id", LivroController.atualizarLivros)
    .delete("/livros/:id", LivroController.excluirLivro)
export default router;