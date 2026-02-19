/*1. Criando um objeto pessoal
Crie um objeto com seu nome, idade e profissão.*/

const pessoal = {
  nome: "Mary",
  sobrenome: "Oliveira",
  idade: 39,
  Nacionalidade: "Brasileira",
};

/*2. Acessando propriedades
Acesse e exiba o valor da propriedade "nome" no console.*/

console.log("Nome: ", pessoal.nome);

/*3. Atualizando valores
Modifique a propriedade "idade" com um novo valor.*/
pessoal.idade = 39;

console.log("Idade: ", pessoal.idade);

/*4. Adicionando uma nova propriedade
Adicione ao objeto uma nova propriedade chamada "cidade".*/

pessoal.cidade = "Recife";
console.log("Cidade adicionada: ", pessoal.cidade);

/*const chave = "cidade";
pessoal[chave] = "Recife";
console.log(pessoal);*/

/*5. Função com objeto
Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.*/

const usuario = {
  nome: "Mariana",
  idade: 35,
  profissao: "Médica",
};

function exibirDados(pessoa) {
  return `Meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`;
}

console.log(exibirDados(usuario));

/*6. Lista de pessoas
Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.*/

const listaDePessoas = [
  { nome: "Patricia", idade: 25 },
  { nome: "Larissa", idade: 30 },
  { nome: "Rafaela", idade: 17 },
];

console.log(listaDePessoas[1].idade);

/*7. Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.*/

/*const maiorIdade = listaDePessoas.filter((pessoa) => {
  return pessoa.

console.log(maiorIdade); */

for (let p of listaDePessoas) {
  if (p.idade >= 18) {
    console.log(`${p.nome} é maior de idade.`);
  }
}

/*8. Objeto com método
Crie um objeto chamado usuario com as propriedades nome e saudacao.
A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.*/

const usuarioSaudacao = {
  nome: "Rodrigo",
  saudacao: function () {
    console.log("Olá meu nome é ", usuarioSaudacao.nome);
  },
};

usuarioSaudacao.saudacao();

/*9. Listando propriedades com for...in
Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício*/

for (let chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}

/*10. Cálculo de compra
Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).*/

const produto = { preco: 10, quantidade: 5 };

const valorTotal = produto.preco * produto.quantidade;
console.log(`Valor total da compra: R$${valorTotal}`);
