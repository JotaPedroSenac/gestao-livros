const { livros } = require("./livros"); //trazendo o array autores

function listarLivros() {
    livros.forEach(livros => {
        console.log(livros);
    });
}


// listarAutores();
module.exports = { listarLivros };