
function calcularMedia(notalab, notasemestre, notaexame) {


  const pesolab = 2;
  const pesosemestre = 3;
  const pesoexame = 5;


  const somapesos = pesolab + pesosemestre + pesoexame;

  const media = (
    (notalab * pesolab) +
    (notasemestre * pesosemestre) +
    (notaexame * pesoexame)
  ) / somapesos;


  let conceito;


  if (media >= 8.0 && media <=10) {
    conceito = "A";
  } else if (media >= 7.0) {
    conceito = "B";
  } else if (media >= 6.0) {
    conceito = "C";
  } else if (media >= 5.0) {
    conceito = "D";
  } else {
    conceito = "E";
  }

  console.log(`Média ponderada: ${media.toFixed(2)}`);

  // Exibe o conceito final no console
  console.log(`Conceito: ${conceito}`);
}
calcularMedia(8.0, 7.5, 8.0);


function organizadorNumeros(I, A, B, C){

let numero


}



