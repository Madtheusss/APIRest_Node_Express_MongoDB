import livros from "../models/Livro";
import Livro from "../models/Livro"; // Supondo que o nome do modelo seja "Livro" com "L" maiúsculo.

class LivroController {
    static listarLivros = (req, res) => {
        Livro.find((err, livros) => { // Correção aqui
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json(livros);
            }
        });
    }

    static listarLivrosPorID = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (error, livros) => {
            if (error) {
                res.status(400).send({ message: `${error.message} - Id do livro não encontrado!` })
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivros = (req, re) => {
        let livro = new livros(req.body);

        livro.save((error) => {
            if (error) {
                res.status(500).send({ message: `${error.message} - Falha ao cadastrar o livro!` });
            }
            else {
                res.status(201).send(livro.toJSON())
            }
        })

    }

    static atualizarLivros = (req, res) => {
        const id = req.params.id;

        livros.findByIDAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Livro Atualizado!' })
            } else {
                res.status(500).send({ message: error.message });
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: "Livro removido com sucesso!" })
            } else {
                res.status(500).send({ message: error.message })
            }
        })

    }
}

export default LivroController;
