// Função que calcula a média ponderada de três notas e determina o conceito final
function calcularMedia(notalab, notasemestre, notaexame) {

  // Define os pesos de cada tipo de nota:
  const pesolab = 2;
  const pesosemestre = 3;
  const pesoexame = 5;

  // Soma total dos pesos (2 + 3 + 5 = 10)
  const somapesos = pesolab + pesosemestre + pesoexame;

  // Calcula a média ponderada: Multiplica cada nota pelo seu peso, soma os resultados e divide pela soma total dos pesos
  const media = (
    (notalab * pesolab) +
    (notasemestre * pesosemestre) +
    (notaexame * pesoexame)
  ) / somapesos;

  // Declara a variável que vai armazenar o conceito final (A, B, C, D ou E)
  let conceito;

  // Estrutura condicional que define o conceito com base na média calculada
  // Cada faixa de média corresponde a um conceito específico
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

  // Exibe a média ponderada no console
  // toFixed(2) limita o número a duas casas decimais
  // Usamos crase (` `) para interpolar a variável dentro da string
  console.log(`Média ponderada: ${media.toFixed(2)}`);

  // Exibe o conceito final no console
  console.log(`Conceito: ${conceito}`);
}
calcularMedia(8.0, 7.5, 8.0);


function organizadorNumeros(I, A, B, C){

let numero


}

