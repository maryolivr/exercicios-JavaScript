// entre 9 e 10 excelente
// entre 7 e 8 bom
// entre 4 e 6 médio
// entre 0 e 3 ruim

const notaDoAluno = 4;

switch (notaDoAluno) {
  case 10:
  case 9:
    console.log("Excelente");
    break;
  case 8:
  case 7:
    console.log("Bom");
    break;
  case 6:
  case 5:
  case 4:
    console.log("Mediano");
    break;
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Ruim");
    break;
  default:
    console.log("Valor inválido");
    break;
}

// break - interrompe o fluxo quando uma condição é atendida.
// independentemente do valor, queremos realizar uma ação. Nesse caso, utilizamos default. Por exemplo, se não tivermos um valor entre 0 e 10, não queremos fazer nada. Por padrão, apenas saímos, sem realizar nenhuma ação. Podemos inserir um console.log, por exemplo, "valor inválido".
