const {autores} = require("./autores");

function criarAutor(nome, email) {
    const novoAutor = { nome, email }; //atributos do objeto
    autores.push(novoAutor); //autores vai ficar um array de objetos
    return novoAutor;
};

module.exports = { criarAutor };