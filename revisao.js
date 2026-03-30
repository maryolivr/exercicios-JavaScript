// let nome = "Mary Oliveira";
// console.log(`Olá ${nome}! Seja bem-vinda ao curso de JavaScript!`);
//
// let anoAtual = 2026;
// let anoNascimento = 1987;
// let idade = anoAtual - anoNascimento;
//
// console.log(`Você tem ${idade} anos`);
//
// let cidade = "Recife";
// let estado = "Pernambuco";
// let pais = "Brasil";
//
// console.log(`Você está em ${cidade} - ${estado}, ${pais}`);
//
// let temCarteira = false;
//
// console.log(typeof temCarteira);
//
// let saldo = 0;
// let deposito = 200;
//
// let saldoFinal = deposito - 50;
//
// console.log(
//   `Seu saldo era de R$ ${saldo} e você recebeu um depósito de R$ ${deposito} e fez um saque de R$ 50,00, restando R$ ${saldoFinal} na sua conta`,
// );
//
// let matematica = 7.0;
// let portugues = 8.2;
// let ciencias = 9.0;
//
// let mediaFinal = (matematica + portugues + ciencias) / 3;
//
// console.log(`A media final é de ${mediaFinal.toFixed(2)}`);
//
// let salario = 3000;
// let aumento = salario * 1.1;
//
// console.log(
//   `O salário era de R$ ${salario}, e teve um aumento de 10%, agora o salário é de ${aumento}`,
// );
//
// let cliques = 0;
//
// cliques++;
// cliques++;
// cliques++;
//
// console.log(cliques);
//
// const PI = 3.14;
//
// console.log(`Antes de mudar ${PI}`);

// Não é possível alterar o valor da variável utilizando a variável const - Constantes não podem ser alteradas

// const PI = 3.15
// console.log(`Depois de mudar ${PI}`)

// let mensagem = "A pontuação final é ";
// let numero = 100;
//
// let mensagemNumero = mensagem + numero;
//
// console.log(mensagemNumero);
//
// console.log(typeof mensagemNumero);

// Crie um arquivo JavaScript e implemente um laço for para imprimir números de 1 a 10, configurando corretamente a inicialização, condição e incremento.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Use o laço for para identificar e exibir números pares e ímpares dentro de um intervalo definido.

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) console.log(`${i}`);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) console.log(`${i}`);
}

// Desenvolva um código que percorra cada letra de uma palavra, utilizando a propriedade .length para delimitar os índices.

const palavra = "Amarelo";
console.log(palavra.length);

// Reescreva a lógica de contagem utilizando as estruturas while e do while, atentando para a verificação da condição e incremento apropriado para evitar loops infinitos.

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);

// Resolva o desafio de contar a quantidade de números pares e ímpares entre 0 e 100, imprimindo cada resultado com console.log.

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`Número par ${i}`);
  } else {
    console.log(`Número ímpar${i}`);
  }
}

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1) console.log(`Números ímpares${i}`);
// }
