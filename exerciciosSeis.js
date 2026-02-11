/* 1. Lista de nomes
Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.*/

const nomes1 = ["Amanda", "Laura", "Luana", "Vanessa"];

for (let i = 0; i < nomes1.length; i++) {
  console.log(nomes1[i]);
}

/* 2. Adicionar e remover itens
Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois. */

const frutas = ["Laranja", "Maçã", "Limão"];

console.log(frutas);

frutas.push("Uva");
console.log(frutas);

frutas.shift();
console.log(frutas);

/*3. Contar itens do array
Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length. */

const cidades = ["Recife", "Aracaju", "Natal"];

console.log(cidades.length);

/*4. Somar todos os números
Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

for (let i = 0; i < numeros.length; i++) {
  //total = total + numeros[i];
  total += numeros[i];
}
console.log(total);

/*5. Média de notas
Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7. */

let notas = [7, 8, 10, 9];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;
console.log("Média final: " + media);

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

/*6. Mensagens personalizadas com forEach
Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.*/

let nomes = ["Maria", "José", "Paulo", "Larissa"];

nomes.forEach((nomes) => console.log(nomes));

/* 7. Descontos com map
Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.*/

let precos = [100, 200, 50, 80, 25, 19, 31];
// let precosComDesconto = precos.map((preco) => {
//   return preco * 0.9;
// });
//
// console.log(precos);
// console.log(precosComDesconto);

// let precosComDesconto = precos.map((p) => p * 0.9);
// console.log(precosComDesconto);

// let somaDesconto = 0;
// for (let i = 0; i < precosComDesconto.length; i++) {
//   somaDesconto += precosComDesconto[i];
//   console.log(somaDesconto);
// }

/* let precos = [100, 200, 300]; 

let comDesconto = precos.map(function(preco) { 

return preco * 0.9; 

}); 

console.log("Preços com 10% de desconto:", comDesconto); */

/* 8. Filtrar valores altos
Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.*/

/* let idades = [12, 18, 25, 16, 30]; 

let maiores = idades.filter(function(idade) { 

return idade >= 18; 

}); 

console.log("Maiores de idade:", maiores); */

let idades = [18, 21, 34, 38];

let maiorIdade = idades.filter((n) => n >= 18);
console.log(maiorIdade);

/*9. Simulando carrinho de compras
Crie um array com os preços de produtos em um carrinho de compras.
Utilize um laço for ou for...of para calcular o valor total da compra.

Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.*/

let precosProdutos = [120, 200, 150, 300];
let produtosDesconto = 0;
// for (let i = 0; i < precosProdutos.length; i++) {
//   somaProdutos += precosProdutos[i];
//   produtosDesconto = somaProdutos * 0.8;
// }
// console.log(produtosDesconto);

for (const precoCalculo of precosProdutos) {
  produtosDesconto += precoCalculo;
}

const valorFinal = produtosDesconto * 0.8;
console.log(valorFinal);

/*10. Lista de tarefas
Crie dois arrays:

um array com nomes de tarefas
outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
Exiba a lista de tarefas pendentes no console. */

let tarefas = ["varrer", "Mercado", "Estudar", "Trabalhar"];
let statusConcluido = [true, false, false, true];

const tarefasPendentes = tarefas.filter((tarefa, indice) => {
  return statusConcluido[indice] === false;
});

console.log("tarefas pendentes: ", tarefasPendentes);
