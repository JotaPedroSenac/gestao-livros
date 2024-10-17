// for in

// const pessoa = {
//     nome: 'Joao',
//     idade: 30,
//     cidade: 'São Paulo'
// }


// for(let chave in pessoa){
//     // console.log(`${chave}: ${pessoa[chave]}`);
//     if (pessoa.nome === 'Joao') {
//         console.log(`${chave}: ${pessoa[chave]}`);
//     }else{
//         console.log('Usuário Não existe')
//     }
// }

// for of

// const numeros = [10,20,30];

// percorre o array, mas não itera os objetos
// const numeros = [
//     {
//         numero: 1
//     }, 
//     {
//         numero: 2
//     }
// ];

// for(let numero of numeros){
//     console.log(numero);
// }

// forEach

// const frutas = ['maca', 'banana', 'laranja'];

// frutas.forEach((fruta) => {
//     console.log(`${fruta}`);
// });

// const numeros = [1,2,3,4];

// const dobro = numeros.map(
//     function dobro(num){
//         return num * 2;
//     }
// );

// console.log(dobro);

// const numeros = [1,2,3,4];

// const pares = numeros.filter(

//     function retornarPares(n){
//         return n % 2 == 0;
//     }
// );

// console.log(pares);

// const numeros = [1,2,3,4];

// const soma = numeros.reduce(
//     function somar(acumulador, num) {
//         return acumulador + num;
//     },0
// );

// console.log(soma);

// let contador = 0;

// while (contador < 5) {
//     if (contador % 2 == 0) {
//         console.log(contador)
//     }

//     contador++
// }

// const prompt = require('prompt-sync')();

// let valor;


// do {
//     valor = prompt('Digite um valor');
// } while (valor !== 'sair');

const dados = [1,2,3,4,5,6,0];

let indice = dados.indexOf();

function excluir(numero){
    for (let i = 0; i < dados.length; i++) {
        if (numero == dados[i]) {
            dados.splice(numero - 1 , 1);
            console.log(dados);
        }
        
    }
}

excluir(4);


