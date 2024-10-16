const { autores } = require("./autores"); //trazendo o array autores

function listarAutores() {
    autores.forEach(autor => {
        console.log(autor);
    });
}


// listarAutores();
module.exports = { listarAutores };