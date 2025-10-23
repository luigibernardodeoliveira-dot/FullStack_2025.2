
let I = parseInt(prompt("Digite o valor de I (1, 2 ou 3):"));
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

let valores = [A, B, C];

if (I === 1) {

  valores.sort((x, y) => x - y);

} else if (I === 2) {

  valores.sort((x, y) => y - x);

} else if (I === 3) {

  let maior = Math.max(A, B, C);
  let menor = Math.min(A, B, C);
  let meio = A + B + C - maior - menor;
  valores = [menor, maior, meio];

} else {
  console.log("Valor de I inválido!");
}

console.log("Valores resultantes:", valores.join(", "));
