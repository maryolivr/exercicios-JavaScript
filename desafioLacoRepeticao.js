// contar quantos numeros pares e numeros impares entre 0 e 100

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

// Laço de repetição

// for (totalNumerosPares >= 0; totalNumerosPares <= 100; totalNumerosPares++) {
//   if (totalNumerosPares % 2 == 0) console.log(totalNumerosPares);
// }

// for (totalNumerosPares >= 0; totalNumerosPares <= 100; totalNumerosPares++) {
//   if (totalNumerosPares % 2 > 0) console.log(totalNumerosPares);
// }

// Se você quiser apenas os números pares de uma vez, sem precisar testar um por um com o if, você pode pular de 2 em 2 no laço:
// Mostra apenas os pares de 0 a 100
for (let contador = 0; contador <= 100; contador += 2) {
  console.log(contador);
}

for (let contador = 0; contador <= 100; contador++) {
  if (contador % 2 == 0) {
    totalNumerosPares++;
  } else {
    totalNumerosImpares++;
  }
}

console.log("Total de números pares", totalNumerosPares);
console.log("Total de números pares", totalNumerosImpares);
