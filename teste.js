const { Console, log } = require("console");
const { TIMEOUT } = require("dns");

// Mostra apenas os pares de 0 a 100
for (let i = 0; i <= 100; i += 1) {
  console.log(i);
}

/*Receber números até digitar 0
Simule a digitação de números usando uma variável numeroDigitado.
Use um do...while para repetir a execução até que o valor seja 0.
Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.

📌 Observação:
Considere que o valor de numeroDigitado é alterado manualmente a cada repetição.*/

/*let numeroDigitado;
let quantidade = 
do {
 numeroDigitado !== 0;
 numeroDigitado++;
} while (quantidade !== 0);
quantidade--;
 console.log(quantidade);*/

//-----------------------------------------------------------------

/*const readline = require("readline");
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
leitor.question("Qual é o seu peso? ", (peso) => {
  if (peso > 0) {
    peso++;
  } else {
    console.log("Digite um peso válido.");
  }
  leitor.question("Qual é a sua altura? ", (altura) => {
    if (altura > 0) {
      altura++;
    } else {
      console.log("Digite uma altura válida!");
    }
    leitor.close();
  });
});*/

//----------------------------------------------------------------

/*function calcularIMC(peso, altura) {
  return peso / (altura * altura);

const resultadoIMC = calcularIMC("59", "1.72");
console.log(`Resultado do IMC ${resultadoIMC.toFixed(2)}`);*/

//----------------------------------------------------------------

function multiplicacao(a, b) {
  return a + b;
}

let resultado1 = multiplicacao(5, 3);
let resultado2 = multiplicacao(6, 4);

console.log(resultado1, resultado2);

function frase() {
  return "Olá";
}

//let saudacao = frase();
console.log(frase());

function celcius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// let value = celcius(77); // Call the toCelcius() function
console.log(celcius(77));

function hello(name) {
  return "Hello" + name;
}

let saudacao = hello(" Mary");
console.log(saudacao);

function variosNomes(primeiroNome, segundoNome) {
  return primeiroNome + " " + segundoNome;
}

let nomes = variosNomes("Patricia", "Albuquerque");
console.log(nomes);

// As funções em JavaScript possuem um objeto embutido chamado objeto de argumentos.
// usar uma função para encontrar (por exemplo) o maior valor em uma lista de números:

//EX.:

// function encontrarValorMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
//
// let valores = encontrarValorMax(1, 5, 6, 9);
// console.log(valores);

let encontrarValorMax = Math.max(1, 5, 6, 9);
console.log(encontrarValorMax);

//---------------------------------------------------------------

// function encontrarValorMin() {
//   let min = +Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }

// let valorMin = encontrarValorMin(1, 5, 6, 9);
// console.log(valorMin);

let encontrarValorMin = Math.min(1, 5, 6, 9);
console.log(encontrarValorMin);

//----------------------------------------------------------------

//Imagine que, em vez de querer apenas o maior número, você queira criar uma função que me diga quais números da lista são maiores que 5.

// function maioresQueCinco() {
//   let resultado = [];
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > 5) {
//       resultado.push(arguments[i]);
//     }
//   }
//   return resultado;
// }
//
// let filtro = maioresQueCinco(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(filtro);

//--------------------------------------------------------------
// Arrow Functions
let listaMaiorQueCinco = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maioresQueCinco = listaMaiorQueCinco.filter((n) => n > 5);
console.log(maioresQueCinco);

//----------------------------------------------------------------

// pegar so os numeros pares de uma lista

// function numerosPares() {
//   let listaNumerosPares = [];
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] % 2 == 0) {
//       listaNumerosPares.push(arguments[i]);
//     }
//   }
//   return listaNumerosPares;
// }
//
// let resultadoPares = numerosPares(1, 2, 3, 4, 5, 6, 7);
// console.log(resultadoPares);

//------------------------------------------------------------------
// Arrow Functions
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = listaNumeros.filter((n) => n % 2 === 0);
console.log(numerosPares);

//-----------------------------------------------------------------

// Soma todos os valores de entrada

// function somarValores() {
//   let soma = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     soma += arguments[i];
//   }
//   return soma;
// }
//
// let somar = somarValores(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(somar);

//-----------------------------------------------------------------

// Usando o Rest Operator (...args)

// let valores = (...numeros) => {
//   return numeros.reduce((total, atual) => total + atual, 0);
// };
// const somarValores = valores(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(somarValores);

//----------------------------------------------------------------

function somarTotal(...numeros) {
  let soma = 0;
  for (const num of numeros) {
    soma += num;
  }
  return soma;
}

console.log(somarTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//-----------------------------------------------------------------

// A Função de 1º Grau (f(x) = ax + b)

function calcularReta(x, a, b) {
  return a * x + b;
}

console.log(calcularReta(1, 2, 3));

//------------------------------------------------------------

// Saudação Personalizada

// function saudacao1(nome) {
//   console.log("Olá, ", nome);
// }
//
// saudacao1("Mary");

//---------------------------------------------------------------

// Refatoração e Arrow Functions / A Arrow Function é um jeito moderno e curto de escrever funções.

const saudacao2 = (nome) => console.log("Olá, ", nome);
saudacao2("Mary");

//---------------------------------------------------------------

// Arrow Functions
const multiplicar = (x, y) => x * y;
const resultado = multiplicar(2, 3);
console.log("Resultado da multiplicação: ", resultado);

//----------------------------------------------------------------

// function multiplicacao(x, y) {
//   return x * y;
// }
//
// let resultado = multiplicacao(2, 5);
//
// console.log("Resultado da multiplicação: ", resultado);

//-----------------------------------------------------------------
// O Dobro

// function dobroNumero(x) {
//   return x * 2;
// }
//
// let numero = 5;
// let resultadoDobro = dobroNumero(5);
// console.log(`O dobro de ${numero} é igual a ${resultadoDobro}`);

// Arrow Functions
let dobroNumero = (x) => x * 2;
console.log(dobroNumero(5));

// Usando Math.pow()
const aoQuadradro = (x) => Math.pow(x, 2);
console.log(aoQuadradro(2));

// Usando o operador de exponenciação (**)
const aoQuadrado = (x) => x ** 2;
console.log(aoQuadrado(2));

//-------------------------------------------------------------------

// Higher Order Functions (Funções que mandam em outras)
// Uma Higher Order Function é uma função "chefe". Ela recebe outra função (o callback) como se fosse um ingrediente.
const dizerOi = (nome) => `Olá, ${nome}! `;
const dizerTchau = (nome) => `Tchauzinho, ${nome}! `;

// 2. Criamos a "Chefe" (a Higher Order Function)
function executorDeMensagens(funcaoCallback, nomeDoUsuario) {
  //console.log("A chefe está iniciando a tarefa...");

  // A chefe executa a função que ela recebeu como argumento
  const resultado = funcaoCallback(nomeDoUsuario);
  return resultado;
}

// 3. Colocando para funcionar
const mensagem1 = executorDeMensagens(dizerOi, "Maria");
console.log(mensagem1);

const mensagem2 = executorDeMensagens(dizerTchau, "João");
console.log(mensagem2);

//---------------------------------------------------------------
//callback

//const somar = (a, b) => a + b;
// const multiplicar1 = (a, b) => a * b;
//
// function operacaoMatematica(num1, num2, acao) {
//   console.log("Realizando cálculo...");
//   const resultado = acao(num1, num2);
//   return resultado;
// }
//
// console.log(operacaoMatematica(2, 3, somar));
// console.log(operacaoMatematica(2, 3, multiplicar1));

//----------------------------------------------------------------
// callback
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;

function operacao(num1, num2, funcaoDeCalculo) {
  const resultado = funcaoDeCalculo(num1, num2);
  return resultado;
}

console.log(operacao(2, 3, somar));
console.log(operacao(5, 3, subtrair));

//----------------------------------------------------------------
//callback

// O Clique do Botão (Event Listeners)
// const botao = document.querySelector("#meuBotao");
//
// const avisarUsuario = () => alert("Você clicou no botão!");
//
// botao.addEventListener("click", avisarUsuario);
//
// console.log(avisarUsuario);

//----------------------------------------------------------------

// Bloco 4: Tempo e Repetição (Assincronismo)
// Aqui o código não roda todo de uma vez. Ele espera ou repete.

// console.log("Alarme definido para daqui a 3 segundos...");
//
// setTimeout(() => {
//   console.log("BEEP BEEP! Hora de acordar!");
// }, 3000);
//
// let segundos = 0;
// const cronometro = setInterval(() => {
//   segundos++;
//   console.log(`Passaram-se ${segundos} segundos...`);
//
//   if (segundos === 5) clearInterval(cronometro);
//   console.log("Cronometro finalizado");
// }, 1000);
//
// console.log("Eu apareço antes do alarme, mesmo estando depois no código!");
//
//----------------------------------------------------------------

// 1. A ferramenta de pausa(copie esta parte, ela é padrão)
// const pausar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// async function realizarDownload() {
//   console.log("📡 Iniciando download...");
//
//   await pausar(1000); // Espera 1 segundo
//   console.log("▓░░░░ 20%");
//
//   await pausar(1000);
//   console.log("▓▓░░░ 40%");
//
//   await pausar(1000); // Espera 1 segundo
//   console.log("▓░░░░ 60%");
//
//   await pausar(1000);
//   console.log("▓▓░░░ 80%");
//
//   await pausar(1000);
//   console.log("▓▓░░░ 100%");
//
//   console.log("✅ Download concluído com sucesso!");
// }
//
// realizarDownload();

//---------------------------------------------------------------
// Refatorando com Repetição

// const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// async function downloadInteligente() {
//   console.log("📡 Iniciando download otimizado...");
//
//   for (let porcentagem = 20; porcentagem <= 100; porcentagem += 20) {
//     await esperar(2000);
//
//     console.log(`▓ Progressão: ${porcentagem}%`);
//   }
//   console.log("✅ Download concluído com sucesso!");
// }
// downloadInteligente();

//----------------------------------------------------------------

// const pausar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// async function semaforo() {
//   console.log("🔴 VERMELHO - Pare!");
//
//   await pausar(2000);
//   console.log("🟡 AMARELO - Atenção!");
//
//   await pausar(1000);
//   console.log("🟢 VERDE - Siga!");
//
//   console.log("O sinal vai fechar...");
//   for (let i = 0; i <= 3; i++) {
//     await pausar(300);
//     console.log("🟢");
//   }
//   console.log("🔴 SINAL FECHADO.");
// }
// semaforo();

//---------------------------------------------------------------

// O Alarme e o Contador

// O setTimeout funciona como um despertador: você define um tempo e, quando esse tempo acaba, ele executa uma função uma única vez.

// Sintaxe: setTimeout(função, tempo_em_milissegundos)
// setTimeout(function () {
//   console.log("Tempo esgotado!");
// }, 11000);
//
// // O setInterval é como um metrônomo ou um relógio de parede: ele executa a função repetidamente em intervalos fixos.
//
// let contador = 0;
//
// const meuIntervalo = setInterval(function () {
//   contador++;
//   console.log("Número: " + contador);
//
//   if (contador === 10) {
//     console.log("Chegamos em 10! Parando o contador...");
//     clearInterval(meuIntervalo);
//   }
// }, 1000);

//----------------------------------------------------------------

// Interface de Terminal (Readline)
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual o seu nome? ", (nome) => {
  console.log("Olá, ", nome);
  readline.close();
});

const lista = ["Amanda", "Luana", "Leticia", "Carla", "Valeria"];
// Amanda = 0
// Valeria = 4

console.log("Primeira da lista: ", lista[0]);
console.log("Último da lista: ", lista[4]);
console.log("Total da lista", lista.length);

lista.push("Tatiana");
console.log("Adiciona mais uma na lista: ", lista.length);

console.log("Última da lista: ", lista[lista.length - 1]);

const mistura = [42, "texto", true, { chave: "valor" }, () => "função"];

//---------------------------------------------------------------

/* o código identifica se um elemento é uma função antes de executá-la, garantindo que outros tipos sejam simplesmente exibidos no console.*/

/*mistura.forEach((item) => {
  if (typeof item === "function") {
    console.log("Executando função:", item());
  } else {
    console.log("Item:", item);
  }
});*/

//-----------------------------------------------------------------

let frutas = ["Laranja", "mamão", "Limão", "Maçã"];
for (let i = 0; i < frutas.length; i++) {
  frutas[i];
}

console.log(frutas[3]);

frutas.push("Banana", "Abacaxi");
console.log(frutas);

frutas.splice(0, 2);
console.log(frutas);

frutas.forEach((fruta, indice) => {
  console.log("indice", indice, fruta);
});

for (const fruta of frutas) {
  console.log(fruta);
}

const frutasComM = frutas.filter((fruta) => fruta.startsWith("M"));
console.log(frutasComM);

//------------------------------------------------------------------

const precos = [200, 300, 400];
const precosComAumento = precos.map((preco) => preco * 1.1);
console.log(precosComAumento);

const numeros = [2, 10, 5, 18, 20];

const resultado3 = numeros.filter((n) => n > 10).map((n) => n * 2);

console.log(resultado3);

//-------------------------------------------------------------------

const produtos = [
  { nome: "Teclado", preco: 150, categoria: "Eletrônicos" },
  { nome: "Cadeira", preco: 800, categoria: "Móveis" },
  { nome: "Mouse", preco: 80, categoria: "Eletrônicos" },
  { nome: "Mesa", preco: 1200, categoria: "Móveis" },
];

produtos.push({ nome: "Fone", preco: 100, categoria: "Eletrônicos" });
console.log(produtos);

const categoriaEletronicos = produtos.filter(
  (produto) => produto.categoria === "Eletrônicos",
);
console.log(categoriaEletronicos);

const produtoDesconto = categoriaEletronicos.map(
  (produto) => produto.preco * 0.9,
);
console.log(produtoDesconto);

//-----------------------------------------------------------------

const nomesM = ["Ana", "Bia", "Caio"];
const nomesMaiusculo = nomesM.map((nomeM) => nomeM.toLocaleUpperCase());
console.log(nomesMaiusculo);

//-----------------------------------------------------------------

const notas = [5, 8, 4, 10, 3];
const aprovados = notas.filter((nota) => {
  return nota >= 6;
});
console.log(aprovados);

//-----------------------------------------------------------------

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bia", nota: 5 },
  { nome: "Caio", nota: 9 },
];

const mensagem = alunos
  .filter((aluno) => aluno.nota >= 6)
  .map((aluno) => `Parabéns ${aluno.nome}, você passou!`);
console.log(mensagem);

//-----------------------------------------------------------------

const pessoa = {
  nome: "Carlos",
  idade: 45,
  CNH: true,
};

pessoa.idade = 55;
console.log(pessoa.idade);

delete pessoa.CNH;
console.log(pessoa);

//-------------------------------------------------------------------

const carro = { marca: "Toyota", "tipo-modelo": "corolla" };

carro.modelo = "Hilux";
console.log(carro.modelo);

console.log(carro["tipo-modelo"]);

const oQueEuQueroSaber = "marca";
console.log(carro[oQueEuQueroSaber]);

carro["marca"] = "peugeot";

console.log(carro["marca"]);

//-----------------------------------------------------------------

const filme = {
  titulo: "Matrix",
  ano: 1999,
};

filme.ano = 2024;
console.log(filme.ano);

const campo = "titulo";
console.log(filme[campo]);

//------------------------------------------------------------------

for (let chave in filme) {
  console.log(chave, filme[chave]);
}

const chaves = Object.keys(filme);
console.log(chaves);

chaves.forEach((chave) => {
  console.log("Nome do campo", chave);
});

const valores = Object.values(filme);
console.log(valores);

const entradas = Object.entries(filme);
console.log(entradas);

for (let [chave, valor] of entradas) {
  console.log(chave, "->", valor);
}

//-----------------------------------------------------------------
//Destructuring objetos - O nome da chave.
const livro = {
  titulo: "A arte da guerra",
  autor: "Sun Tzu",
  ano: 2024,
};

const { titulo, autor } = livro;
console.log(`O livro ${titulo} foi escrito por ${autor}`); // Template Strings - Facilita a leitura de frases.

//-------------------------------------------------------------------
//Destructuring arrays - A posição (ordem).
const frutass = ["Maçã", "Banana", "Uva"];
const [favorita, segundaOpcao] = frutass;
console.log(`Minha fruta favorita é ${favorita}`);

//------------------------------------------------------------------
//Rest Operator
const compras = ["Arroz", "Feijão", "Azeite", "Sabão"];

const [primeiro, ...restante] = compras;
console.log(primeiro);
console.log(restante);

//-----------------------------------------------------------------
//Data

const dataAtual = new Date();

const dia = dataAtual.getDate();
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano ${ano} e hoje é dia ${dia}`);

//-------------------------------------------------------------------
//Função construtura

function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

const carro1 = new Carro("Toyota", "Corolla");
const carro2 = new Carro("Ford", "Mustang");
console.log(carro1.marca);
console.log(carro2.modelo);

//--------------------------------------------------------------------
const hoje = new Date();

const diaa = hoje.getDate();
const mes = hoje.getMonth() + 1;
const anoo = hoje.getFullYear();
const hora = hoje.getHours();
const minutos = hoje.getMinutes();

console.log(
  `Hoje é dia ${diaa}/${mes}/${anoo} são ${hora} e ${minutos} minutos`,
);

//------------------------------------------------------------------
//Timezone
const reuniao = new Date("2026-03-05T14:30:00-03:00");
console.log(reuniao);

//------------------------------------------------------------------
//Formatar data
const data = new Date();

const dataHoje = data.toLocaleDateString("en-US");
console.log(dataHoje);

//------------------------------------------------------------------
//Spread Operator - Para Combinar e Clonar
const usuarioOriginal = { nome: "Luiz", idade: 40, email: "luiz@gmail.com" };

const usuarioAtualizado = {
  ...usuarioOriginal,
  cidade: "Recife",
  idade: 35,
};

console.log(usuarioOriginal.idade);
console.log(usuarioAtualizado.idade);
console.log(usuarioAtualizado.cidade);

//-------------------------------------------------------------------
//Para Combinar e Clonar

const frutas1 = ["Uva", "Banana", "Limão"];
const legumes = ["Cenoura", "Batata", "Beterraba"];

const feira = [...frutas1, ...legumes, "Chuchu"];

console.log(feira);

//------------------------------------------------------------------
//Rest Operator: Para Extrair Elementos
const notass = [10, 5, 7, 8];

const [melhorNota, recuperacao, ...outrasNotas] = notass;
console.log(melhorNota);
console.log(recuperacao);
console.log(outrasNotas);

//------------------------------------------------------------------
//Destructuring em Parâmetros de Objetos

const usuarioo = {
  nome: "Ana",
  profissao: "Desenvolvedora",
  nivel: "Júnior",
};

function saudar({ nome, profissao }) {
  console.log(`Olá ${nome}, que bom ter uma ${profissao} por aqui!`);
}

saudar(usuarioo);

//------------------------------------------------------------------
//Destructuring em Parâmetros de Arrays

const coordenadas = [10, 50];
function imprimirPosicao([x, y]) {
  console.log(`O ponto está em X: ${x} e Y: ${y}`);
}

imprimirPosicao(coordenadas);

//------------------------------------------------------------------
const produto = { descricao: "Lanterna", preco: 20 };
function exibirPreco({ descricao, preco }) {
  console.log(`O item ${descricao} custa R$${preco}`);
}

exibirPreco(produto);

//-----------------------------------------------------------------
// Calculando desconto

function valorProduto(preco, desconto = 20) {
  const valorDesconto = preco - (preco * desconto) / 100;
  return valorDesconto;
}

console.log(valorProduto(80));

//-----------------------------------------------------------------
// // Verificando se um número é par ou ímpar

const verificarParidade = (numero) => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "ímpar";
  }
};
console.log(verificarParidade(8));
console.log(verificarParidade(5));

//-------------------------------------------------------------------
// Cálculo de frete por distância

/*function calcularFrete(distancia) {
  if (distancia <= 5) return 5;
  else if (distancia <= 20) return distancia * 0.5;
  else return 20;
}

console.log(calcularFrete(25));*/

// ou aero function

const calcularFrete = (distancia) => {
  if (distancia <= 5) {
    return 5;
  } else if (distancia <= 20) {
    return distancia * 0.5;
  } else {
    return 20;
  }
};

console.log(calcularFrete(19));

//------------------------------------------------------------------
// Mensagem pós-processamento

const processarPedido = (nome, tipoCliente, callback) => {
  console.log(`Processando pedido de ${nome}...`);
  callback(nome, tipoCliente);
};

const mensagemPersonalizada = (nome, tipo) => {
  if (tipo === "vip") {
    console.log(`Obrigado pela preferência ${nome}! Você ganhou frete grátis.`);
  } else if (tipo === "novo") {
    console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
  } else {
    console.log(`Obrigado pela sua compra, ${nome}!`);
  }
};

processarPedido("Mariana", "novo", mensagemPersonalizada);

//-------------------------------------------------------------------
//Mensagem com atraso

function responderUsuario(nome, callback) {
  console.log(`Processando sua pergunta...`);
  setTimeout(() => {
    callback(nome);
  }, 3000);
}

function mostrarResposta(nome) {
  console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}

responderUsuario("Luana", mostrarResposta);

//------------------------------------------------------------------
// Avaliando a pontuação de um usuário

function avaliarDesempenho(pontuacao, callback) {
  let status = "";

  if (pontuacao >= 70) {
    status = "aprovado";
  } else if (pontuacao >= 50) {
    status = "reforco";
  } else {
    status = "reprovado";
  }

  callback(pontuacao, status);
}

function gerarMensagem(pontuacao, status) {
  console.log(`Pontuação ${pontuacao}`);

  if (status === "aprovado") {
    console.log("Parabéns! Você foi aprovado!");
  } else if (status === "reforco") {
    console.log("Atenção! Você precisa de reforço.");
  } else {
    console.log("Infelizmente, você foi reprovado. Tente novamente.");
  }
}

avaliarDesempenho(82, gerarMensagem);

// Palavra palindromo - Function declaration - Hoinsting
/*palavraPalindromo();

function palavraPalindromo() {
  var palavra = "planta";
  var separandoAsLetras = palavra.split("");
  var palavraInvertida = separandoAsLetras.reverse();
  palavraInvertida = palavraInvertida.join("");
  if (palavra == palavraInvertida) {
    console.log("A palavra " + palavra + " é um palindromo!");
  } else {
    console.log("A palavra " + palavra + " não é um palindromo!");
  }
}*/

// Function expression

const palavraPalindromo = function (palavra) {
  var separandoAsLetras = palavra.split("");
  var palavraInvertida = separandoAsLetras.reverse();
  palavraInvertida = palavraInvertida.join("");
  if (palavra == palavraInvertida) {
    console.log("A palavra " + palavra + " é um palindromo!");
  } else {
    console.log("A palavra " + palavra + " não é um palindromo!");
  }
};

palavraPalindromo("radar");

// Método de array

const arr = [12, 23, 34, 45, 56];

arr.push(89);
console.log(arr);

arr.pop();
console.log(arr);

const elem = arr.indexOf(34); //é usado para procurar um valor dentro de um array.
console.log(elem);

const novoArr = arr.slice(1);
console.log(novoArr);

// Métodos de array - callbacks

const arrNum = [2, 4, 6, 8, 10];

const novoArray = arrNum.map((num) => {
  return num * 10;
});

console.log(novoArray);

arrNum.forEach((num, i) => {
  console.log(`O número ${num} está no índice ${i}`);
});

const arrFilt = arrNum.filter((num) => num % 5 === 0);
console.log(arrFilt);

//----------------------------------------------------------------

// código omitido

// filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = [
  "12323434545",
  "34658756786",
  43254365434,
  "76547865345",
  56768767564,
];

const result = cpfs.map((cpf) =>
  typeof cpf === "string" ? cpf : cpf.toString(),
);

console.log(result);

// Painel de controle de produtos

const produtos1 = [
  { nome: "Notebook", preco: 2500, quantidadeVendida: 75 },
  { nome: "Mouse", preco: 100, quantidadeVendida: 180 },
  { nome: "Teclado", preco: 150, quantidadeVendida: 125 },
  { nome: "Monitor", preco: 900, quantidadeVendida: 95 },
];

// Mostrar todos os produtos (nome, preço, quantidade).

console.log("Lista completa de produtos");
produtos1.forEach((p) => {
  console.log(`${p.nome}: R$ ${p.preco} Vendidos ${p.quantidadeVendida}`);
});

// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.

const maisVendidos = produtos1
  .filter((p) => p.quantidadeVendida > 100)
  .map((p) => p.nome);

console.log("Produtos com mais de 100 vendas");
console.log(maisVendidos.join(" e "));

// Calcular os totais de venda de cada produto.

const vendasComTotais = produtos1.map((p) => ({
  nome: p.nome,
  faturamento: p.preco * p.quantidadeVendida,
}));

vendasComTotais.forEach((v) => console.log(`${v.nome}: R$ ${v.faturamento}`));

// Descobrir o mais lucrativo.

const maisLucrativo = vendasComTotais.reduce((anterior, atual) => {
  return anterior.faturamento > atual.faturamento ? anterior : atual;
});

console.log("Produto mais lucrativo");

console.log(
  `O campeão é o ${maisLucrativo.nome} com R$ ${maisLucrativo.faturamento}`,
);

//--------------------------------------------------------------------------------------------

const pessoa1 = {
  nome: "Roberta R",
  nascimento: "2020-01-01",
  cpf: "23445667889",
  pontuacao: 4576,
  trofeus: ["speedrunner", "indie"],
};

console.log(pessoa1.nome);
console.log(pessoa1.trofeus[0]);

delete pessoa1.cpf;
console.log(pessoa1);

function exibeTrofeus(listaTrofeus) {
  for (const trofeu of listaTrofeus) {
    console.log(`Tem o troféu ${trofeu}`);
  }
}

exibeTrofeus(pessoa1.trofeus);

// --------------------------------------------------------------------------------------

function montarObjeto(arrPares) {
  const resultado = {};

  for (const [chave, valor] of arrPares) {
    resultado[chave] = valor;
  }
  return resultado;
}

const dados = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "Curitiba"],
];

console.log(montarObjeto(dados));

//-----------------------------------------------------------------------------------------

const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30,
};

const categorias = Object.keys(relatorio);
const valores1 = Object.values(relatorio);
const entradas1 = Object.entries(relatorio);

console.log("Categorias avaliadas", categorias);
console.log("Valores registrados", valores1);

console.log("\nDetalhamento");

for (let [chave, valor] of entradas1) {
  const status = valor > 50 ? "alerta" : "ok";
  console.log(`${chave}: ${valor} (${status})`);
}

//-------------------------------------------------------------------------------------


