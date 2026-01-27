// 1. Verificação de idade para compra de bebida
// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".

let idade = 18;

if (idade >= 18) {
  console.log("Pode comprar bebida alcoólica");
} else {
  console.log("Venda proibida para menores de 18 anos");
}

// 2. Saudação de acordo com a hora
// Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".

let horaAtual = 5;

if (horaAtual <= 12) {
  console.log("Bom dia");
} else if (horaAtual <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

// 3. Verificação de número positivo ou negativo
// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.

let numeroQualquer = 0;

if (numeroQualquer > 0) {
  console.log("O número é positivo");
} else if (numeroQualquer == 0) {
  console.log("O número é zero");
} else {
  console.log("O número é negativo");
}

// 4. Conversão de nota em conceito
// Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).

let nota = 3.9;

if (nota >= 9) {
  console.log("A");
} else if (nota >= 8) {
  console.log("B");
} else if (nota >= 6) {
  console.log("C");
} else if (nota >= 4) {
  console.log("D");
} else {
  console.log("E");
}

// E (0-3.9)   >=4 = D      < 4 = E
// D (4-5.9)   >=6 = C      < 6 = D
// C (6-7.9)   >=8 = B      < 8 = C
// B (8-9)     >=9 = A      < 9 = B
// A (9-10)    =10 = A

// 5. Número par ou ímpar com ternário
// Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.

let numero = 6;

numero % 2 === 0
  ? console.log("O número é par")
  : console.log("O número é ímpar");

// 6. Menu com switch-case
// Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".

let opcao = 0;

switch (opcao) {
  case 1:
    console.log("Cadastrar");
    break;
  case 2:
    console.log("Listar");
    break;
  case 3:
    console.log("Sair");
    break;
  default:
    console.log("Opção inválida");
    break;
}

// 7. Validação de campo obrigatório
// Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".

let email = "";
if (email === "") {
  console.log("Preencha o campo de e-mail");
} else {
  console.log("E-mail válido");
}

// 8. Validação de senha segura
// Crie duas variáveis:

// senha

// senhaValida (valor true ou false, definido manualmente)

// Se senhaValida for verdadeira, mostre "Senha válida".
// Caso contrário, mostre "Senha muito curta".

// 📌 Observação:
// Considere que a validação do tamanho da senha já foi feita previamente e o resultado está armazenado na variável senhaValida.

let senha = "abc123";
let senhaValida = false;

if (senhaValida) {
  console.log("Senha válida");
} else {
  console.log("Senha muito curta");
}

// 9. Compra com saldo
// Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".

const saldoDisponivel = 100;
const valorCompra = 80;

if (valorCompra <= saldoDisponivel) {
  console.log("Compra aprovada");
} else {
  console.log("Saldo insuficiente");
}

// 10. Validação de formulário completo

// Crie três variáveis:

// nome
// email
// idade
// Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).

// Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
// Caso contrário, mostre "Por favor, preencha todos os campos corretamente".

// 📌 Observação:
// Considere que a verificação dos campos já foi realizada anteriormente e o resultado está armazenado na variável formularioValido.

const nomeFormulario = "Ana";

const emailFormulario = "ana@gmail.com";

const idadeFormulario = 25;

const formularioValido = true;

if (formularioValido) {
  console.log("Formulário enviado com sucesso");
} else {
  console.log("Por favor, preencha todos os campos corretamente");
}
