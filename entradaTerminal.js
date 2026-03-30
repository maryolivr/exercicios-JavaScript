const readline = require("readline"); // Aqui você está chamando um "ajudante" interno do Node.js chamado readline. Ele é o responsável por conseguir ler o que alguém digita no teclado.

const leitor = readline.createInterface({
  input: process.stdin, // Diz que a "entrada" de dados vem do que é digitado no teclado.
  output: process.stdout, // Diz que a "saída" (as respostas) deve aparecer na tela do terminal.
});

// O método .question() exibe o texto na tela e fica esperando o usuário digitar algo e apertar Enter. O que for digitado é guardado na variável nome. O código dentro dos parênteses (nome) => { ... } só acontece depois que o usuário responde.

leitor.question("Qual é o seu nome? ", (nome) => {
  console.log("Olá", nome);
  console.log("Boas vindas ano nosso sistema!");

  leitor.question("Qual é a sua idade? ", (idade) => {
    if (idade >= 18) {
      console.log("Você ja pode tirar sua CNH!");
    } else {
      console.log("Você ainda não pode tirar sua CNH!");
    }
    leitor.close(); // Ele encerra a conexão com o teclado. Se você esquecer disso, o programa ficará "travado" no terminal para sempre, esperando mais interações.
  });
});

// Utilizamos conceitos como arrow functions, callbacks, if e else, além do console.log, que nos acompanha desde o início. Compreendemos a importância do require, que carrega bibliotecas não carregadas por padrão, e a configuração de entrada e saída vinculada ao processo do sistema operacional.
