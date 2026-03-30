// O setTimeout é uma função que, para ser executada, requer parâmetros. Abrimos parênteses e passamos os argumentos desejados.

function saudacao() {
  console.log("Olá, tudo bem?");
}

// setTimeout(saudacao, 2000); // Esse valor é em milissegundos. Ex.: 1 segundo = 1000ms; 2 segundos = 2000ms; 3 segundos = 3000ms.

let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log("Tempo decorrido (em segundos): " + contador);
  if (contador == 10) {
    clearInterval(id);
  }
}, 1000);
