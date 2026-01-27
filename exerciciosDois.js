// 1. Verificação de maioridade
// Crie uma variável idade.
// Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.

// 📌 Dica: o resultado deve ser true ou false.

let idade = 20

let maiorIdade = idade >= 18
console.log(idade >= 18); // true ou false
//console.log(`Você é maior de idade? ${maiorIdade}`)

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno.
// Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.

let matematica = 8.0
let portugues = 9.5

let media = (portugues + matematica) / 2
// console.log(`A média é: ${media}`)

// let mediaMaiorOuIgual = media >= 7
console.log(media >= 7)
// console.log(`A media é igual ou maior que 7? ${mediaMaiorOuIgual}`)

// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.

let valorCompra = 35.90
let valorPago = 50

let troco = valorPago - valorCompra

console.log(`O troco é: ${troco}`)

// 4. Validação de senha
// Crie duas variáveis com senhas digitadas em momentos diferentes.
// Exiba no console o resultado da comparação que verifica se as senhas são iguais.

let senhaUm = 'sDF51558ccawe'
let senhaDois = 'vsdvxklKnj285'

let senhaSaoIguais = senhaDois === senhaUm

console.log(`As senhas digitadas são iguais? ${senhaSaoIguais}`)

// 5. Controle de faltas
// Crie as variáveis totalAulas e faltas.
// Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite.

let totalAulas = 60
let faltas = 10

let limiteDeFaltas = totalAulas * 0.25

// console.log(`O limite de faltas é de: ${limiteDeFaltas}`)

// let faltasUltrapassamLimite = faltas > limiteDeFaltas
console.log(faltas > limiteDeFaltas)
// console.log(`As faltas do aluno ultrapassam o limite ${faltasUltrapassamLimite}`)

// 6. Verificação de login
// Crie duas variáveis booleanas: temLogin e temSenha.
// Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras.

let temLogin = true
let temSenha = true

// let saoVerdadeiras = temLogin == temSenha
console.log(temLogin && temSenha)
// console.log(`O login e a senha são verdadeiras? ${saoVerdadeiras}`)

// 7. Valor negado
// Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.

let disponivel = false

// let valorDisponivel = !disponivel
console.log("Disponibilidade invertida: " + !disponivel);
// console.log(`O valor está disponivel? ${valorDisponivel}`)

// 8. Condições compostas
// Crie duas variáveis numéricas.
// Exiba no console o resultado da expressão que verifica se:

// os dois números são pares e
// os dois números são iguais.

let numeroUm = 4
let numeroDois = 4

// let numeroImpar = numeroDois % 2 
// let numeroPar = numeroUm % 2

// let numeros = numeroImpar == numeroPar && numeroDois == numeroUm
console.log(
  numeroUm % 2 === 0 &&
  numeroDois % 2 === 0 &&
  numeroUm === numeroDois
)
// console.log(`Os números são pares e são iguais? ${numeros}`)

// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."

let valor = 120
let totalValor = valor * 0.15

console.log(`15% de 120 é igual a ${totalValor}`)

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.

// let valorUm = 2
// let valorDois = 3
// let valorTres = 5

// let valorTotal = valorUm + valorDois * valorTres // Na ordem de operações a multiplicação e a divisão vem primeiro, igual na matemática, e a soma e subtração é por ultimo, portanto colocar a soma entre parenteses para priorizar o calculo.

// console.log(`O valor total é de: ${valorTotal}`)

let resultado = 2 + 3 * 5; 

console.log("Resultado da expressão 2 + 3 * 5: " + resultado)

// A multiplicação é feita primeiro por causa da ordem de precedência dos operadores. 

// Ou seja, 3 * 5 = 15, depois 2 + 15 = 17