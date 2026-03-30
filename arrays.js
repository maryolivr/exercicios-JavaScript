// const frutas = ["Uva", "Banana", "Kiwi", "Maça", "Morango"];
//
// // uva = 0
// // Morango = 4
// console.log("Primeira fruta: ", frutas[0]);
// console.log("Primeira fruta: ", frutas[4]);
//
// console.log("Total de frutas ", frutas.length);
// frutas.push("Melancia");
//
// console.log("Total de de frutas depois de adicionar melancia: ", frutas.length);
//
// console.log("Primeira fruta: ", frutas[frutas.length - 1]);

// frutas.splice(2, 2);
// console.log("Depois de remover", frutas);

// for (let i = 0; i < frutas.length; i++) {
//   console.log("Índice", i);
//   console.log(frutas[i]);
// }
//
// console.log("Usando forEach");
// frutas.forEach((valor, indice) => {
//   console.log("indice", indice, valor);
// });
//
// console.log("Usando for of");
// for (const fruta of frutas) {
//   console.log("Fruta da vez: ", fruta);
// }

const nomes = ["Amanda", "Leticia", "Lais", "Rafael", "Laura"];
// for (let i = 0; i < nomes.length; i++) {
//   console.log("indice", i);
//   console.log("Total de nomes ", nomes[i]);
// }
//
// nomes.forEach((nomes, indice) => {
//   console.log("indice", indice, nomes);
// });

// .length -> ele serve para te dizer o tamanho ou a quantidade de itens em determinado objeto.
// for (const nome of nomes) {
//   console.log(nome);
// }

// console.log(nomes.length);
// console.log(nomes[1]);
nomes.push("Luana", "Roberto");
console.log(nomes.length);
// console.log(nomes);
// console.log(nomes[5]);
console.log(nomes[nomes.length - 1]);
nomes.splice(0, 2);
console.log(nomes);
