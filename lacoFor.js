// A Anatomia do Laço for
// Pense no for como uma pequena máquina que precisa de três instruções principais para funcionar:

// Início (Inicialização): Onde começamos? (ex: let i = 1)

// Condição (Parada): Até quando continuamos? (ex: i <= 10)

// Passo (Incremento): O que fazemos ao final de cada volta? (ex: somar mais um, i++)

// for,"Quando você sabe o limite (0 a 100) e o passo da contagem. É o mais ""limpo""."

// Eu sei quantas vezes vou repetir?
// Se SIM (ex: 10 vezes) → Use for.

//----------------------------------------------------------------

// O for também permite que você controle mais de uma variável ao mesmo tempo. Veja este exemplo:

// for (let i = 0, j = 10; i < j; i++, j--) {
// console.log(`i: ${i}, j: ${j}`);
// }

// Resultado:

// i: 0, j: 10

// i: 1, j: 9

// i: 2, j: 8

// i: 3, j: 7

// i: 4, j: 6

//-----------------------------------------------------------------

// Omitindo partes do laço for
// Uma coisa interessante sobre o for é que você pode omitir qualquer uma das três partes dele (inicialização, condição ou incremento), se fizer sentido para o seu código:

// Omitindo a inicialização
// Se a variável já estiver definida antes do loop:

// let i = 0;

// for (; i < 5; i++) {
//   console.log(i);
// }

// Resultado: 0, 1, 2, 3, 4

//-----------------------------------------------------------------

// Omitindo a condição
// Cuidado com essa forma, pois pode gerar loops infinitos. Você precisa garantir que terá um ponto de parada interno:

// let i = 0;

// for (; ; i++) {
//   if (i >= 5) break;

//   console.log(i);
// }

// Resultado: 0, 1, 2, 3, 4

//----------------------------------------------------------------

// Omitindo o incremento
// Você pode mover a expressão de incremento para dentro do corpo do laço:

// for (let i = 0; i < 5; ) {
//   console.log(i);

//   i++;
// }

// Resultado: 0, 1, 2, 3, 4

// ----------------------------------------------------------------

// Laços infinitos (cuidado!)
// Como mencionado, se você não definir corretamente uma condição de parada, você pode acabar criando um laço infinito:

// for (;;) {
// console.log('Laço infinito!');
// }

//Esse código ficará executando para sempre, travando seu programa. Para evitar isso, sempre certifique-se de definir uma condição que eventualmente se torne falsa ou use break para sair do laço.

//-----------------------------------------------------------------

// Quando usar cada variante?
// Laço tradicional: Use quando souber exatamente quantas vezes precisa executar o bloco.

// Laço com múltiplas variáveis: Utilize quando precisar controlar múltiplas condições ao mesmo tempo.

// Laço com partes omitidas: Use com cautela e somente quando fizer sentido específico para seu cenário.

//-----------------------------------------------------------------

// Estrutura do laço de repetição FOR

for (let contador = 1; contador <= 10; contador++) {
  console.log("Número atual: ", contador);
}

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 0) console.log("Número par encontrado: ", numero);
}

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 > 0) console.log("Número impar encontrado: ", numero);
}

//------------------------------------------------------------

// const palavra = "calopsita";

// palavra.lenght indica quantos caracteres uma string possui
// palavra entre[1] - pega a letra na posição indicada

// for (let contador = 0; contador < palavra.length; contador++) {
// console.log(palavra[contador]);
//}

const palavraa = "exemplo";

for (const caractere of palavraa) {
  console.log(caractere);
}
