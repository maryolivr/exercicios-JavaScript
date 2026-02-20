/*1. Destructuring em objetos
Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.*/

const usuario = {
  nome: "Paula",
  idade: 38,
  email: "paula@gmail.com",
};

const { nome, idade, email } = usuario;
console.log(nome);
console.log(idade);
console.log(email);

/*2. Destructuring em arrays
Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.*/

const linguagensDeProgramacao = ["JavaScript", "PHP", "Python"];
const [ling1, ling2, ling3] = linguagensDeProgramacao;
console.log(linguagensDeProgramacao);

/*3. Rest operator em função
Crie uma função que receba vários números como parâmetros usando o operador rest (...).
Utilize um laço for para somar todos os valores recebidos e retorne o total.*/

function somarTudo(...numeros) {
  let total = 0;

  for (let n of numeros) {
    total += n;
  }
  return total;
}

console.log(somarTudo(10, 20));
console.log(somarTudo(1, 2, 3, 4, 5, 10));

/*4. Spread operator com arrays
Crie dois arrays de frutas e combine-os usando o operador spread.*/

const frutas = ["Banana", "Laranja", "Abacaxi"];
const maisFrutas = ["Limão", "Uva"];

const todasAsFrutas = [...frutas, ...maisFrutas];
console.log(todasAsFrutas);

/*5. Spread operator com objetos
Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.*/

const objeto = { nome: "Luana" };
const maisObjeto = { idade: 39 };

const juntandoObjetos = { ...objeto, ...maisObjeto };

console.log(juntandoObjetos);

/*6. Função com parâmetro default
Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.*/
function saudar(nome = "visitante") {
  console.log(`Olá ${nome}`);
}

saudar("Ana");
saudar();

/*7. Trabalhando com datas
Crie uma variável com a data atual e exiba o dia, mês e ano formatados.*/

const hoje = new Date();
//const dia = hoje.getDate();
//const mes = hoje.getMonth() + 1;
//const ano = hoje.getFullYear();

//console.log(`Hoje é dia: ${dia}/${mes}/${ano}`);

const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log(dataFormatada); // Saída: 20/02/2026

/*8. Modularização com export/import
Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).*/

//ES Module
//Ex.: calculos.js - (Onde a função nasce)
export function somar(a, b) {
  return a + b;
}

//main.js - (Onde vai usar)
/*import { somar } from "./calculos.js";
console.log(somar(5, 10));*/

/*9. Objeto com função construtora
Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
Em seguida, crie dois objetos Livro usando essa função.*/

/*function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");

const livro2 = new Livro("Harry Potter", "J.K. Rowling");
console.log(livro1.titulo);
console.log(livro2.autor);

/*10. Método no objeto
Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.*/
function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;

  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito " + this.autor;
  };
}

const meuLivro = new Livro("A Garota do Lago", "Charlie Donlea");
console.log(meuLivro.descrever());
