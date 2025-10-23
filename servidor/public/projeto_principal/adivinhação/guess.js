let num_adivinha = Math.random() * 100;
let valor_num = Math.floor(num_adivinha);

function Guess() {
  let chute = parseInt(document.getElementById("dgt_num").value);

  console.log(`nmr_chute: ${chute}`);
  console.log(`nmr_sorteado: ${valor_num}`);


  if (chute === valor_num) {
    document.getElementById("resultado").style.setProperty("background-color" , "green");
    document.getElementById("resultado").innerHTML = "Parabéns! Você acertou o número!";
  }


  else if (chute < valor_num) {
    document.getElementById("tentativa_pqn").style.setProperty("background-color", "red");
    document.getElementById("tentativa_pqn").innerHTML += `${chute}  `;
  }

  
  else if (chute > valor_num) {
    document.getElementById("tentativa_grd").style.setProperty("background-color", "red");
    document.getElementById("tentativa_grd").innerHTML += `${chute} `;
  }
}
