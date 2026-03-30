// As funções permitem uma melhor organização e eficiência do código.
// Com funções, você pode reutilizar o mesmo código várias vezes.
// O mesmo código, com entradas diferentes, pode produzir resultados diferentes .

// Função de entrada e saída
// As funções mais úteis funcionam assim:

// Entrada de parâmetros - alguns parâmetros são inseridos na função.
// Código da função - parte do trabalho é realizada dentro da função.
// Saída de retorno - algum valor é retornado da função.

// Chamando uma função
// Uma função JavaScript é executada quando é chamada .
// Para chamar uma função , escreva o nome seguido de parênteses, como nome() .

// As funções são definidas com a functionpalavra-chave:

// seguido pelo nome da função
// seguido de parênteses ( )
// seguido por colchetes { }
// O nome da função segue as regras de nomenclatura para variáveis.

// Os parâmetros opcionais estão listados entre parênteses: ( p1, p2, ... )
// O código a ser executado está listado entre chaves: { }
// As funções podem retornar um valor opcional para quem as chamou.
// Para usar o valor retornado, você pode armazená-lo em uma variável ou exibi-lo.

//-----------------------------------------------------------------

//function saudacao(nome) {
// nome é um parametro da função saudação
// console.log("Olá, ", nome);
//}

// const saudacao = (nome) => {
// arrow function "=>"
// console.log("Vida longa e próspera, ", nome);
//

const saudacao = (nome) => console.log("OLá, ", nome);

saudacao("Mary"); // Mary é o argumento

// function calcularDobrodeUm(numero) {
// return numero * 2; // Quando uma função é invocada, ela executa seu bloco de código e, ao encontrar o return, interrompe sua execução para retornar o valor especificado.
// }

// const calcularDobrodeUm = (numero) => {
//   return numero * 2;
// };

const calcularDobrodeUm = (numero) => numero * 2;

const numeroDobrado = calcularDobrodeUm(4);
console.log("O dobro de 4 é: ", numeroDobrado);

console.log("oi", "tudo", "bem", "?"); // Função

// Caso o return seja omitido, a função, por padrão, retornará undefined.

// function calcularIdade(anoAtual) {
//   return anoAtual - 1987;
// }

// const anoAtual = 2026;
// const idade = calcularIdade(anoAtual);
// console.log(`Eu tenho ${idade} anos`);

const calcularIdade = (anoAtual, anoNascimento) => anoAtual - anoNascimento;
console.log(`Idade: ${calcularIdade(2026, 1987)}`);
