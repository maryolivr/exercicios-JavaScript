// truthy e falsy

// Truthy: valores que, embora não sejam exatamente true, são interpretados como verdadeiros.
//Falsy: valores que, embora não sejam exatamente false, são interpretados como falsos.

// false
// 0 (o número zero)
// "" (string vazia)
// null
// undefined
// NaN (Not a Number)

// Qualquer valor que não esteja nessa lista é automaticamente considerado truthy.

const numero = 0;
const indefinido = undefined;
const nulo = null;
const textoVazio = "";

const nome = "Mary";

if (nome) {
  console.log("Olá, ", nome);
} else {
  console.log("Ainda não sei o seu nome");
}

const idade = null;

if (idade != null) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else if (idade >= 0 && idade < 18) {
    console.log("Menor de idade");
  }
}
