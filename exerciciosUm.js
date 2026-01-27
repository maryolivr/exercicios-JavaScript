// 1. Boas-vindas personalizadas
// Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

let nome = 'Mary Oliveira de Souza'

console.log(`Olá, ${nome}! Seja bem-vinda ao curso de JavaScript!`)

// 2. Cálculo de idade
// Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

let anoAtual = 2026
let anoNascimento = 1987
let idade = anoAtual - anoNascimento

console.log('Eu tenho '+ idade + ' anos.')

// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."

let cidade = 'Recife'
let estado = 'Pernambuco'
let pais = 'Brasil'

console.log(`Eu estou em ${cidade} - ${estado}, ${pais}.`)


// 4. Tipo da variável:
//Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

let temCarteira = true

console.log(typeof temCarteira)

// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.

let saldo = 0
let deposito = 200
let saque = 50
let valorTotal = deposito - saque

console.log(`Seu saldo atual é de R$ ${valorTotal}`)

// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

let matematica = 8.5;
let portugues = 7.0;
let ciencias = 9.0;

let mediaFinal = (matematica + portugues + ciencias) / 3;

console.log('A sua média final entre as três disciplinas é: ' + mediaFinal.toFixed(2));


// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

let salario = 3000; 

let novoSalario = salario * 1.10; // aumento de 10% 

console.log("Após um aumento de 10%, o novo salário é R$" + novoSalario); 

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let cliques = 0; 

cliques++; 

cliques++; 

cliques++; 

console.log("O botão foi clicado " + cliques + " vezes.");

// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

// 1. Criamos a constante
// const PI = 3.14;

// console.log("O valor de PI é: " + PI);

// 2. Tentamos alterar o valor (Isso vai causar um erro!)
// PI = 3.1415; 

// 3. Esta linha abaixo nem chegará a ser executada
// console.log("Novo PI: " + PI);

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = 'O total de pontos é '
let numero = 100
let resultado = mensagem + numero

console.log(resultado)
console.log('O tipo final da variável é: ' + typeof resultado)