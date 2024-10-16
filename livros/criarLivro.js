const {livros} = require("./livros");

function criarLivros(titulo, autor, isbn) {
    const novoLivro = { titulo, autor, isbn };
    livros.push(novoLivro); 
};

module.exports = { criarLivros }; //exportar funçao em forma de objeto