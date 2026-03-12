// IF/ELSE
// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = "divisao";

if (operacao === "soma") {
  console.log(num1 + num2);
} else if (operacao === "multiplicacao") {
  console.log(num1 * num2);
} else {
  console.log("Operação não identificada!");
}

// localizar o nivel de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
// $10999 a $7000: 5% de bônus
// $ 6999 a $4008: 7% de bônus
// $3999 p baixo: 9% de bônus

const salario = 5000;

if (salario >= 11000) {
  console.log("3% de bônus");
} else if (salario < 11000 && salario >= 7000) {
  console.log("5% de bônus");
} else if (salario < 7000 && salario >= 4000) {
  console.log("7% de bônus");
} else {
  console.log("9% de bônus");
}

// verificar se o ano é bissexto.
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2024;
// const ano = 2000;
// const ano = 2022;
// const ano = 1992;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`${ano} O ano é bissexto`);
} else {
  console.log(`O ano não é bissexto`);
}

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const nome = "Roberta";
const nota = 8;
const faltas = 3;

const recebeBonus =
  nota >= 8 && faltas <= 2
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`;

console.log(recebeBonus);

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = "super premium";
switch (user) {
  case "free":
    console.log("acesso limitado");
    break;
  case "premium":
    console.log("acesso total ao app");
    break;
  case "super premium":
    console.log("acesso total ao app e bônus");
    break;
  default:
    console.log("tipo de user desconhecido");
    break;
}

// Verificar se pessoa pode entrar no evento, maior que 18 anos

const idade = 20;

if (idade >= 18) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}

const podeEntrar = idade >= 18 ? "Acesso permitido" : "Acesso negado";
console.log(podeEntrar);

// Verificar a temperatura
const temperatura = 26;

if (temperatura <= 15) {
  console.log("Frio");
} else if (temperatura > 15 && temperatura <= 25) {
  console.log("Agradável");
} else {
  console.log("Quente");
}

// Verificar idade

const idade1 = 18;

if (idade1 < 12) {
  console.log("Infantil");
} else if (idade1 >= 12 && idade1 < 18) {
  console.log("Juvenil");
} else {
  console.log("Adulto");
}

// Verificar horário de funcionamento

const diaSemana = 0;
switch (diaSemana) {
  case 0:
    console.log("Aberto das 10h às 14h");
    break;
  case 1:
    console.log("Aberto das 9h às 18h");
    break;
  case 2:
    console.log("Aberto das 9h às 18h");
    break;
  case 3:
    console.log("Aberto das 9h às 18h");
    break;
  case 4:
    console.log("Aberto das 9h às 18h");
    break;
  case 5:
    console.log("Aberto das 9h às 18h");
    break;
  case 6:
    console.log("Aberto das 10h às 14h");
    break;
}

if (diaSemana === 6 || diaSemana === 0) {
  console.log("Aberto das 10h às 14h");
} else {
  console.log("Aberto das 9h às 18h");
}

// Verificar usuário

const usuario = "admin";

const verificarUsuario =
  usuario === "admin" ? "Login bem-sucedido" : "Usuário inválido";
console.log(verificarUsuario);

// Verificar tipo de fruta se é compatível com o tipo esperado

const fruta = "Limão";
if (fruta === "Laranja" || fruta === "Abacaxi") {
  console.log(`${fruta}: A fruta é compatível com a receita`);
} else {
  console.log("A fruta não é compatível.");
}

// Verificar se pode finalizar a compra, se o carrinho não tiver vazio

const carrinhoVazio = true;

const naoEstaVazio =
  carrinhoVazio === false
    ? "Compra finalizada com sucesso!"
    : "Não pode finzalizar a compra, o carrinho está vazio";
console.log(naoEstaVazio);

if (!carrinhoVazio) {
  console.log("Compra finalizada com sucesso!");
} else {
  console.log("Não pode finzalizar a compra, o carrinho está vazio");
}

// Verificar o status de pagamento

const statusPagamento = "aprovado";
switch (statusPagamento) {
  case "pendente":
    console.log("Pagamento pendente");
    break;
  case "aprovado":
    console.log("Pagamento aprovado");
    break;
  case "recusado":
    console.log("Pagamento recusado");
    break;
  default:
    console.log("Status inválido");
    break;
}

// Verificar acesso a nível do jogo

const pontos = 40;
const vidas = 1;

if (pontos > 50 && vidas > 0) {
  console.log("Pode avançar o nível");
} else {
  console.log("O personagem não pode avançar");
}

// Nível de bateria do dispositivo

const bateria = 90;
if (bateria < 0.2) {
  console.log("Crítica: a bateria está com menos de 20%");
} else if (bateria >= 0.2 && bateria <= 0.8) {
  console.log("Moderada");
} else {
  console.log("cheia");
}

const bateriaFraca =
  bateria < 20
    ? '"Crítica": se a bateria estiver abaixo de 20%'
    : bateria >= 20 && bateria <= 80
      ? 'Moderada": se estiver entre 20% e 80% '
      : '"Cheia": se estiver acima de 80%';

console.log(bateriaFraca);

// LAÇOS - for/while/do..while
// Contagem de números

const numeroFinal = 5;

for (let contador = 1; contador <= numeroFinal; contador++) {
  console.log(contador);
}

// Contagem regressiva

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Lançar");

// Números pares

const numerosPares = 10;
for (let i = 1; i <= numerosPares; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exibindo os caracteres

//Senha cadastrada: seguranç@2025

const senha = "seguranç@2025";

for (let i = 0; i <= senha.length - 1; i++) {
  console.log(`Caractere ${i + 1}: ${senha[i]}`);
}

// Solicitando nomes até digitar ''fim''

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
let i = 0;

while (entradas[i] !== "fim") {
  console.log("Nome:", entradas[i]);
  i++;
}

// Verificando o acesso restrito

let numero = 1;

for (let i = 1; i <= 20; i++) {
  if (i === 12) {
    console.log("Número proibido encontrado! Encerrando...");
    break;
  }
  console.log(i);
}

// Somando os primeiros N números

const totalDias = 10;
let economia = 0;
let dia = 1;

do {
  economia += dia;
  dia++;
} while (dia <= totalDias);

console.log(`Total economizado: R$ ${economia}`);

// Temporizador de aquecimento

const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;

let segundos = 0;

do {
  segundos++;
  console.log(`Aquecendo... segundo ${segundos}`);

  if (segundos === temperaturaIdealAlcancadaEm);
  {
    console.log("Temperatura ideal atingida.");
  }
} while (segundos < tempoMinimo);
console.log(`Tempo total de aquecimento: ${segundos} segundos`);

// Registro de caixas processadas

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let processadas = 0;

for (let i = 0; i < caixas.length; i++) {
  let valor = caixas[i];
  if (valor < 0) {
    console.log("Caixa danificada, ignorada.");
    continue;
  }
  console.log(`Caixa processada: ${valor}`);
  processadas++;

  if (processadas === 5) {
    console.log("Limite de caixas processadas atingido!");
    break;
  }
}

// Validação de login

const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

let contador = 0;
let acessoLiberado = false;

while (contador < tentativas.length && contador < 3) {
  if (tentativas[contador] === senhaCorreta) {
    console.log("Acesso permitido!");
    acessoLiberado = true;
    break;
  } else {
    console.log(`Tentativa ${contador + 1} inválida.`);
  }
  contador++;
}
if (!acessoLiberado) {
  console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
}

// FUNÇÕES
// Gerando mensagens personalizadas

function saudacao(nome) {
  if (nome) {
    console.log(`Olá ${nome}, boas vindas!`);
  } else {
    console.log("Olá! Boas vindas!");
  }
}

saudacao("Patricia");
saudacao();

// Calculando desconto

function calcularDesconto(preco, desconto = 10) {
  const valorFinal = preco - (preco * desconto) / 100;
  return valorFinal;
}
console.log(calcularDesconto(100, 20));
console.log(calcularDesconto(100));

// Calculando a média de duas notas

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
console.log(calcularMedia(7, 9));

// Verificando se um número é par ou ímpar

const verificarParidade = (numero) => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "ímpar";
  }
};
console.log(verificarParidade(5));
console.log(verificarParidade(8));

// Cálculo de frete por distância

function calcularFrete(distancia) {
  if (distancia <= 5) {
    return 5;
  } else if (distancia <= 20) {
    return distancia * 0.5;
  } else {
    return 20;
  }
}
console.log(calcularFrete(12));

// Mensagem pós-processamento

function processarPedido(nome, tipoCliente, callback) {
  console.log(`Processando pedido de ${nome}...`);
  callback(nome, tipoCliente);
}

function mensagemPersonalizada(nome, tipo) {
  if (tipo === "vip") {
    console.log(`Obrigado pela preferência, ${nome}`);
  } else if (tipo === "novo") {
    console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
  } else {
    console.log(`Obrigado pela sua compra, ${nome}!`);
  }
}

processarPedido("Laura", "vip", mensagemPersonalizada);

// Mensagem com atraso

function responderUsuario(nome, callback) {
  console.log(`Processando sua pergunta...`);
  setTimeout(() => {
    callback(nome);
  }, 3000);
}

function mostrarResposta(nome) {
  console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}

responderUsuario("Leticia", mostrarResposta);

// Avaliando a pontuação de um usuário

function avaliarDesempenho(pontuacao, callback) {
  callback(pontuacao);
}

function gerarMensagem(pontuacao) {
  console.log(`Pontuação ${pontuacao}`);

  if (pontuacao >= 70) {
    console.log("Parabéns, você foi aprovado!");
  } else if (pontuacao > 50 && pontuacao <= 69) {
    console.log("reforço");
  } else {
    console.log("reprovado");
  }
}
avaliarDesempenho(60, gerarMensagem);

// Classificador de consumo elétrico

function calcularConsumo(potencia, horasPorDia) {
  let consumo = (potencia * horasPorDia * 30) / 1000;
  return consumo;
}

function classificarConsumo(consumo) {
  if (consumo < 50) {
    return "Baixo consumo";
  } else if (consumo >= 50 && consumo < 200) {
    return "Consumo moderado";
  } else {
    return "Alto consumo";
  }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
  console.log(
    `O ${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}.`,
  );
}

const nomeAparelho = "Ar-condicionado";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);

exibirResumo(nomeAparelho, consumo, classificacao);

// Sistema de sorteio com avaliação de participantes

const sortearParticipante = (lista) => {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
};

const avaliarPontuacao = (pontuacao) => {
  if (pontuacao > 80) return "Parabéns, você foi premiado!";
  if (pontuacao >= 50)
    return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
  return "Infelizmente, não foi dessa vez.";
};

const exibirResultado = (participante) => {
  console.log("Sorteando...");
  setTimeout(() => {
    console.log(`Participante sorteado: ${participante.nome}`);
    console.log(`Pontuação: ${participante.pontuacao}`);
    console.log(avaliarPontuacao(participante.pontuacao));
  }, 2000);
};

function realizarSorteio(lista) {
  const sorteado = sortearParticipante(lista);
  exibirResultado(sorteado);
}

const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 },
];

realizarSorteio(participantes);

// Contagem regressiva recursiva

function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Lançamento");
  }
}

contagemRegressiva(5);

// Acessando e modificando elementos de um array

const listaDeCompras = ["arroz", "cebola", "carne", "banana"];
console.log("Segundo item da lista: ", listaDeCompras[1]);
listaDeCompras[listaDeCompras.length - 1] = "feijão";
console.log("Lista após modificação: ", listaDeCompras);

// Percorrendo listas com for - Quando precisa do índice ou controle manual do laço

const despesas = [150, 40, 25, 20];
let total = 0;

for (let i = 0; i < despesas.length; i++) {
  total += despesas[i];
}
console.log(`Total de despesas: R$ ${total}`);

// Exibindo nomes com for...of - Quando quer apenas os valores, sem se preocupar com a posição

const nomes = ["Amanda", "Carla", "Carlos"];

for (let alunos of nomes) {
  console.log("Estudantes: ", alunos);
}

// Exibindo mensagens com forEach() - Quando quer executar algo para cada item, sem precisar de retorno

const mensagens = [
  "Pedido confirmado",
  "Pagamento aprovado",
  "Produto enviado",
];

mensagens.forEach((msg) => {
  console.log("Notificação: ", msg);
});

// Adicionando e removendo itens de uma lista

const tarefas = ["estudar", "lavar roupa", "fazer comida", "fazer compras"];

tarefas.push("pagar boletos");
console.log("Lista após adicionar:", tarefas);

tarefas.pop();
console.log("Lista após remover a última tarefa:", tarefas);

// Clonando um array

const pedidos = ["camiseta", "calça", "tênis"];

const pedidosCopia = pedidos.slice();
pedidosCopia.push("boné");

console.log("Array original:", pedidos);
console.log("Array copiado:", pedidosCopia);

// Buscando itens em uma lista

const livros = ["Dom Casmurro", "O Cortiço", "Capitães da Areia", "Iracema"];
const livroProcurado = "O Cortiço";

if (livros.indexOf(livroProcurado) !== -1) {
  console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
  console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}

// Transformando dados com map()

const precos = [120, 30, 100, 200];

const precosDesconto = precos.map((preco) => preco * 0.9);

console.log("Preços com desconto:", precosDesconto);

// Filtrando valores

const participantess = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 19 },
  { nome: "Daniel", idade: 15 },
  { nome: "Eduarda", idade: 25 },
];

const autorizados = participantess.filter((p) => {
  p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
  return p.idade >= 18;
});

const aprovados = autorizados.map((p) => p.nome);
console.log("Lista de aprovados:", aprovados);

// Painel de controle de produtos

const produtos = [
  { nome: "Notebook", preco: 2500, quantidadeVendida: 75 },
  { nome: "Mouse", preco: 100, quantidadeVendida: 180 },
  { nome: "Teclado", preco: 150, quantidadeVendida: 125 },
  { nome: "Monitor", preco: 900, quantidadeVendida: 95 },
];

let relatorio = "";
let produtosMaisVendidos = "";

let totalPorProduto = "";

const maisLucrativo = { nome: "", totalVendas: 0 };

produtos.forEach((prod) => {
  const totalVendidoProduto = prod.preco * prod.quantidadeVendida;

  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`;

  if (prod.quantidadeVendida > 100) {
    produtosMaisVendidos += `${prod.nome}\n`;
  }

  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`;

  if (totalVendidoProduto > maisLucrativo.totalVendas) {
    maisLucrativo.nome = prod.nome;

    maisLucrativo.totalVendas = totalVendidoProduto;
  }
});

console.log("Relatório de produtos vendidos:");

console.log(relatorio);

console.log("Produtos com alto volume de vendas (> 100 unidades):");

console.log(produtosMaisVendidos);

console.log("Total de vendas por produto:");

console.log(totalPorProduto);

console.log("Produto mais lucrativo:");

console.log(
  `${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`,
);

