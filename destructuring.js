const pessoa = {
  nome: "Nathália",
  idade: 18,
  profissao: "Estudante",
};

function saudacao({ nome, idade }) {
  console.log("Olá, ", nome);
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

saudacao(pessoa);

const frutas = ["Uva", "Maçã"];
const [primeira, segunda] = frutas;
console.log(frutas);
