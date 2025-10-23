let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));
let peso = parseFloat(prompt("Digite o peso da pessoa (em kg):"));

let classificacao = "";


if (altura < 1.20) {
  if (peso <= 60) {
    classificacao = "A";
  } else if (peso <= 90) {
    classificacao = "D";
  } else {
    classificacao = "G";
  }
} else if (altura <= 1.70) {
  if (peso <= 60) {
    classificacao = "B";
  } else if (peso <= 90) {
    classificacao = "E";
  } else {
    classificacao = "H";
  }
} else { 
  if (peso <= 60) {
    classificacao = "C";
  } else if (peso <= 90) {
    classificacao = "F";
  } else {
    classificacao = "I";
  }
}

console.log(`Classificação: ${classificacao}`);
alert(`Classificação: ${classificacao}`);