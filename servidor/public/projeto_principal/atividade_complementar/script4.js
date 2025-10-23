for (let i = 1; i <= 6; i++) {
  let nota1 = parseFloat(prompt(`Digite a 1ª nota do aluno ${i}:`));
  let nota2 = parseFloat(prompt(`Digite a 2ª nota do aluno ${i}:`));

  let media = (nota1 + nota2) / 2;
  let mensagem = "";

  if (media <= 3.0) {
    mensagem = "Reprovado";
  } else if (media <= 7.0) {
    mensagem = "Exame";
  } else {
    mensagem = "Aprovado";
  }

  console.log(`Aluno ${i}: Média = ${media.toFixed(2)} - ${mensagem}`);
  alert(`Aluno ${i}: Média = ${media.toFixed(2)} - ${mensagem}`);
}