const { livros } = require("./livros"); //trazendo o array autores

function listarLivros() {
    livros.forEach(livro => {
        console.log(livro);
    });
}


// listarAutores();
module.exports = { listarLivros };