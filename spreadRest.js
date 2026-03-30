let camila1 = {
  nome: "Camila",
  idade: 29,
  profissao: "Desenvolvedora",
};

const camila2 = { ...camila1 }; // Spread Operator

camila2.idade = 30;
console.log(camila1);
console.log(camila2);

camila1 = {
  ...camila2,
  profissao: "Desenvolvedora Senior",
  possuiCNH: true,
};
console.log(camila1);

const { nome, ...resto } = camila1;// Rest Operator
console.log(nome);
console.log(resto);
