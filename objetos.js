/*O que são objetos?
Em JavaScript, objetos são estruturas que guardam pares de chave e valor. É como uma ficha onde cada campo tem um nome e um conteúdo.*/

/*const pessoa = {
  nome: "Ana",
  idade: 26,
  temCNH: true,
};

pessoa.sobrenome = "Paula";

console.log("nome: ", pessoa.nome);
console.log("Sobrenome: ", pessoa.sobrenome);*/

const livro = {
  titulo: "O Hobbit",
  autor: "J. R. R. Tolkien",
  paginas: 310,
};

livro.publicado = true;
livro.idiomas = ["Inglês", "Portugês", "Espanhol"];

livro.idiomas.push("Mandarim");

console.log("Livro antes: ", livro);
delete livro.paginas;
console.log("Livro depois: ", livro);

console.log("Autor do livro", livro["autor"]);

const autor = {
  nome: "J. R. R. Tolkien",
  nacionalidade: "Britânico",
  idade: 98,
};

console.log("Autor", autor);
livro.autor = autor;

console.log(livro);

livro.autor.nome;
livro.autor.nacionalidade;

//-----------------------------------------------------------------
const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  paginas: 310
};

const propriedade = "autor";
console.log(livro[propriedade]); // Imprime: J.R.R. Tolkien