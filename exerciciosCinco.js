// 1. Função de saudação
// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

function saudacao(nome) {
  console.log(`Olá, ${nome} seja bem-vinda`);
}

saudacao("Mary");

// 2. Função com parâmetros
// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

function apresentarPessoa(nome, idade) {
  console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentarPessoa("Mary", "39");

// 3. Cálculo de IMC
// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula:

// IMC = peso / (altura * altura)

// A função deve retornar o valor do IMC.
// Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

let resultadoIMC = calcularIMC(59, 1.72);
console.log(`Resultado do IMC ${resultadoIMC.toFixed(2)}`);

// 4. Verificar aprovação
// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

function verificarAprovacao(nota) {
  if (nota >= 7) {
    console.log("Aprovado(a)!");
  } else {
    console.log("Reprovado(a).");
  }
}

verificarAprovacao("6");

// 5. Número par ou ímpar
// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.

function ehPar(numero) {
  return numero % 2 === 0;
}

console.log("O número é par? " + ehPar(4));

// 6. Função soma
// Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.

function soma(numero1, numero2) {
  return numero1 + numero2;
}
console.log("Resultado da soma: " + soma(2, 3));

// 7. Reutilizando código
// Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
// A função deve receber dois parâmetros: valorCompra e valorPago.

// A função deve:

// calcular o valor do troco
// retornar o valor calculado
// Depois, utilize o retorno da função para exibir o valor do troco no console.

function calcularTroco(valorCompra, valorPago) {
  let troco = valorPago - valorCompra;
  return troco;
}

let resultadoTroco = calcularTroco(35.9, 50);
console.log("Troco: R$ " + resultadoTroco);

// 8. Arrow function
// Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.

const somarArrow = (numero1, numero2) => numero1 + numero2;
console.log("Resultado da soma: ", somarArrow(2, 3));

// 9. Callback simples
// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".

function executarAcao(acao) {
  acao();
}

executarAcao(function () {
  console.log("Executando ação!");
});

// 10. Desafio do quiz
// Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).

function fazerPergunta(pergunta, respostaCorreta) {
  let respostaUsuario = respostaCorreta; // simulação da resposta

  if (respostaUsuario === respostaCorreta) {
    console.log("Resposta correta!");
  } else {
    console.log("Resposta errada!");
  }
}

fazerPergunta("Qual é a capital do Brasil?", "Brasília");
