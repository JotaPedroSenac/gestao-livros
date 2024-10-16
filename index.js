// importando a biblioteca baixada prompt-sync

// instanciar a biblioteca é só usar o ()

const prompt = require("prompt-sync")(); 

const { autores } = require("./autor/autores");
// let nome  = prompt("Qual é o seu nome?");

//  console.log(`Seu nome é: ${nome}`);

// const livros = require("./livros/livros");
// const autores = require("./autor/autores");

// console.log(livros.livros);

const { criarAutor }  = require("./autor/criarAutor");

const autor1 = criarAutor("Zezinho", "zezinho@email.com");

// ;
const {listarAutores } = require("./autor/listarAutor");
const {listarLivros } = require("./livros/listarLivro");

listarAutores();

const {criarLivros} = require("./livros/criarLivro"); //importando a função criar livros
criarLivros("Livro de fulano", "Zezinho", "12345");

listarLivros();


