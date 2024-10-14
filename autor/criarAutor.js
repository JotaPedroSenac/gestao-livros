const {autores} = require("./autores");

function criarAutor(nome, email) {
    const novoAutor = { nome, email }; //atributos do objeto
    autores.push(novoAutor);
};

module.exports = { criarAutor };