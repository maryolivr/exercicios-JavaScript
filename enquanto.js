// Entendendo o while (O Vigia)
// Imagine que você está segurando um balão com 10 furos. Enquanto houver ar dentro dele, ele continua soprando. Assim que esvaziar, ele para.

// A estrutura do while tem 3 partes espalhadas:

// A Preparação: Você cria a variável fora do laço (let contagemRegressiva = 10).

// A Pergunta: O while olha para o parêntese e pergunta: "Isso ainda é verdade?". Se for, ele entra.

// A Mudança: Dentro do bloco, você precisa diminuir o valor (contagemRegressiva--). Se você esquecer disso, o número nunca muda, a pergunta sempre será "verdade" e o seu computador vai entrar em um loop infinito (ele vai travar tentando contar para sempre!).

//-----------------------------------------------------------------

// Laço,Quando usar?

// while,Quando a parada depende de uma condição que pode mudar (ex: esperar o usuário digitar algo).
// do...while,Quando você precisa que o bloco de código rode primeiro para depois testar se deve continuar.

let contador = 1;

while (contador <= 10) {
  console.log("Número atual: ", contador);
  contador++;
}

//----------------------------------------------------------------

// let numero = 1;

// do {
//   console.log("numero atual", numero);
//   numero++;
// } while (numero <= 10);

//-----------------------------------------------------------------

// const palavra = "calopsita";
// let contador = 0;

// do {
//   console.log(palavra[contador]);
//   contador++;
// } while (contador < palavra.length);

//-----------------------------------------------------------------

// Por que usar while em vez de for?
// Embora para contar números eles pareçam iguais, o while é muito usado quando não sabemos quando o loop vai parar. Por exemplo:

// "Enquanto o usuário não digitar a senha correta, peça a senha de novo."

// "Enquanto o jogo não acabar, continue desenhando os personagens."

//-----------------------------------------------------------------

// Eu sei quantas vezes vou repetir?

// Se SIM (ex: 10 vezes) → Use for.

// Se NÃO (depende do usuário) → Use while ou do...while.

// Eu preciso que o código rode pelo menos uma vez antes de checar a regra?

// Se SIM → Use do...while.
