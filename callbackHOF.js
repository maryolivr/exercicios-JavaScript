// HOF -> Higher-Order Function (Função de Alta Ordem) === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function soma(num1, num2) {
  return num1 + num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

const resultadoSoma = calcular(3, 8, soma); // soma é um callback
console.log("Resultado da soma: ", resultadoSoma);

const resultadoDivisao = calcular(32, 8, divisao); // divisão é um callback
console.log("Resultado da divisão: ", resultadoDivisao);


// funções podem receber parâmetros de qualquer tipo válido no JavaScript, incluindo outras funções. Quando passamos valores para uma função, estamos passando argumentos. 