// document.getElementById("titulo").innerHTML;
// console.log (titulo);

// document.getElementById("nome").innerHTML = "luigi";

// let nome = window.prompt("qual o seu nome" )
// let idade = window.prompt("qual a sua idede" )
// let ano = window.prompt("qual o ano atual ? ")


// let nasc = ano - idade;
// let resposta = "ola" + nome + ",o seu nome de nascimento e " + nasc;

// document.getElementByIdCom("reposta_e1").innerHTML = resposta 

// function exibeMensagem(texto){
//     console.log("texto")

// }
// exibeMensagem("texto1")
// exibeMensagem()
// exibeMensagem()
// exibeMensagem()

// function soma (a,b){
//     let c = a + b;
//     return total; 
    
// }
// console.log("soma de " + a +  " mais " + b + " e igual a " + soma (2,3))
// console.log("soma de " + a +  " mais " + b + " e igual a " + soma (7,9)) 
// console.log("soma de " + a +  " mais " + b + " e igual a " + soma (3,2)) 
// console.log("soma de " + a +  " mais " + b + " e igual a " + soma (5,5)) 
// function imprimeTexto(){
//     let texto = document.getElementById("in_text").value;
//     console.log(texto)
// }
function imprimeIncrementos(){
    let x = parseInt(document.getElementById("in_e2").value)
    
    document.getElementById("resposta_e2").innerHTML = "";
    for (let i = 0; i < x; i++ ){
        console.log(i);
        let resposta = document.getElementById("resposta_e2").innerHTML + " " + i
        document.getElementById("resposta_e2").innerHTML = resposta;
    }
}

function imprimeSoma(){
    let a = parseInt (document.getElementById("in_1_e3").value);
    let b = parseInt (document.getElementById("in_1_e3").value);

    let c = soma (a,b);
    document.getElementById("resposta_e3").innerHTML = c
}
