const idade = 17
const maiorDeIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH // AND

console.log('Pode dirigir? ', podeDirigir)

const podeViajarSozinha = maiorDeIdade || possuiCNH // OR

console.log('Pode viajar sozinha? ', podeViajarSozinha)

const precisaDeAcompanhante = !maiorDeIdade // NOT

console.log('Precisa de acompanhante? ', precisaDeAcompanhante)

// AND && - Retorna verdadeiro apenas se todas as condições forem verdadeiras
// OR || - Retorna verdadeiro se pelo menos uma condição for verdadeira
// NOT ! - Inverte o valor lógico, transforma verdadeiro em falso e vice-versa

maiorDeIdade && possuiCNH || !precisaDeAcompanhante // pode combinar

// TABELA VERDADE

// Operador E (&&)
// Veja a tabela verdade para o operador lógico E:

// | Condição A | Condição B | Resultado A && B |

// | ---------- | ---------- | ---------------- |

// | true | true | true ✅ |

// | true | false | false ❌ |

// | false | true | false ❌ |

// | false | false | false ❌ |


let maiorIdade = true; 

let possuiDocumento = false; 

 

if (maiorIdade && possuiDocumento) { 

console.log('Pode entrar na festa'); 

} else { 

console.log('Não pode entrar na festa'); 

} 

// Resultado: Não pode entrar na festa 

// Operador OU (||)
// Agora veja a tabela verdade para o operador lógico OU:

// | Condição A | Condição B | Resultado A || B |
 
// | ---------- | ---------- | ------------------ |

// | true | true | true ✅ |
 
// | true | false | true ✅ |
 
// | false | true | true ✅ |
 
// | false | false | false ❌ |


// Exemplo:

let temCartaoCredito = false; 

let temDinheiro = true; 


if (temCartaoCredito || temDinheiro) { 

console.log('Pode fazer a compra'); 

} else { 

console.log('Não pode fazer a compra'); 

} 

// Resultado: Pode fazer a compra 

// Operador NÃO (!)
// Veja como funciona o operador lógico NÃO:
 
// | Condição | Resultado !Condição |

// | -------- | ------------------- |
 
// | true | false ❌ |
 
// | false | true ✅ |
 
// Exemplo:


let estaChovendo = true; 


if (!estaChovendo) { 

console.log('Pode sair sem guarda-chuva'); 

} else { 

console.log('Leve o guarda-chuva'); 

} 

// Resultado: Leve o guarda-chuva

// Combinando operadores
// Você pode combinar esses operadores para criar condições mais complexas. Veja este exemplo:

// let idade = 20; 

let possuiIngresso = true; 

let entradaPermitida = (idade >= 18 && possuiIngresso); 


if (entradaPermitida) { 

console.log('Entrada permitida!'); 

} else { 

console.log('Entrada não permitida!'); 

} 

// Resultado: Entrada permitida!

// postfix
// posfixada preserva o valor original na avaliação da expressão, aplicando a atualização posteriormente.
// let a = 3;
// let b = a++ + 2; // aqui b recebe 5, pois a++ retorna 3 e só depois a se torna 4

// prefix
// forma prefixada garante que a variável já esteja atualizada quando usada
// let a = 3;
// let b = ++a + 2; // agora, a é incrementada antes da soma, b recebe 6