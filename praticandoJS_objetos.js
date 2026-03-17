// Criando um objeto com dados de um produto

const produto = {
  nome: "Fone de ouvido",
  preco: 149.9,
  disponivel: true,
};

console.log(produto);

// Acessando dados com ponto e colchetes

const configuracoes = {
  tema: "escuro",
  notificacoes: true,
  idioma: "pt-BR",
};

console.log("Tema:", configuracoes.tema);
console.log("Idioma:", configuracoes["idioma"]);

// Lidando com arrays dentro de objetos

const receita = {
  nome: "Bolo de Cenoura",
  ingredientes: [
    "3 cenouras",
    "1 xícara de óleo",
    "2 xícaras de açúcar",
    "1 colher de fermento em pó",
  ],
  tempoPreparo: "40 minutos",
};

receita.ingredientes[2] = "farinha de trigo";

console.log(`Ingrediente complementar: ${receita.ingredientes[2]}`);

// Removendo uma propriedade

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  modeloAntigo: "Corolla XEi",
};

delete carro.modeloAntigo;

console.log(carro);

// Iterando um array de objetos

const dispositivos = [
  {
    nome: "Impressora",
    status: "ativo",
  },
  {
    nome: "Scanner",
    status: "inativo",
  },
  {
    nome: "Projetor",
    status: "ativo",
  },
];

for (const dispositivo of dispositivos) {
  console.log(
    `Dispositivo ${dispositivo.nome} | Status: ${dispositivo.status}`,
  );
}

// Criando métodos dentro de um objeto

const maquina = {
  nome: "Esteira Transportadora",
  funcionando: false,
  exibirStatus: function () {
    if (this.funcionando) {
      console.log(`A máquina ${this.nome} está em funcionamento.`);
    } else {
      console.log(`A máquina ${this.nome} está parada.`);
    }
  },
};

maquina.exibirStatus();

// Montando um objeto a partir de pares chave-valor

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

// Criando um sistema de inspeção

const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30,
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas", categorias);
console.log("Valores registrados", valores);

console.log("\nDetalhamento");
for (let [chave, valor] of entradas) {
  const status = valor > 50 ? "alerta" : "ok";
  console.log(`${chave}: ${valor} (${status})`);
}

// Gerando um relatório de manutenção

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7,
};

let totalDias = 0;
let mesesComParada = 0;

for (let mes in manutencao) {
  const dias = manutencao[mes];
  totalDias += dias;

  if (dias > 0) {
    mesesComParada++;
  }
}

console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
  console.log("Status: Atenção! Acima do limite anual.");
} else {
  console.log("Status: Dentro do limite anual");
}

// Analisando desempenho de estudantes

const mediaGeral = 0;

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 },
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;

    for (let estudante of this.estudantes) {
      const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";

      console.log(
        `Estudante ${estudante.nome} | Progresso: ${estudante.progresso} | Situação: ${situacao}`,
      );

      totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);
    console.log(`\nTotal de estudantes ${this.estudantes.length}`);
    console.log(`Média geral da tuma ${media}%`);
  },
};

curso.gerarRelatorio();
