let idades = [18,20];
console.log(idades);

idades.push(25)
console.log(idades);

let idade = idades.pop();
console.log(idade);
console.log(idades);

delete idades[0]
console.log(idades);


let carro_1 = {
    posicao: 0,
    cor: "red",
    modelo: "Corola",
    buzina: function(){
        console.log("bii bii");
    },
    andar: function(qtde){
        this.posicao += qtde;
    }
};

carro_1.buzina();

console.log("posição atual: " + carro_1.posicao);
carro_1.andar(3);
console.log("posição atual: " + carro_1.posicao);


let carro_2 = {
    posicao: 0,
    cor: "blue",
    modelo: "Fusca",
    buzina: function(){
        console.log("fom fom");
    },
    andar: function(qtde){
        this.posicao += qtde;
    }
};


let carros = [carro_1, carro_2]
for (let i = 0; i < carros.length; i++){
    let carro = carros[i];
    console.log(carro.modelo)
    carro.buzina()
}

let retangulo_1 = {
    lw: 2,
    cor_preenchimento: "blue",
    cor_linha: "red",
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    desenha: function(){
        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.strokeRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
};


let retangulo_2 = {
    lw: 2,
    cor_preenchimento: "green",
    cor_linha: "red",
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    desenha: function(){
        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.strokeRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
};


let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'ball.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}



let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let aux = 1;
function animacao(){
    ctx.clearRect(0,0,400,400)

    // if(retangulo_1.x == 350){
    //     aux = -1; 
    // }
    // else if(retangulo_1.x == 0){
    //     aux = 1 ;
    // }
    // retangulo_1.x += aux;

    retangulo_1.desenha();
    retangulo_2.desenha();
    bola.desenha();

    requestAnimationFrame(animacao);
}

animacao()


document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let vel = 5
    if(tecla == "ArrowUp"){
        retangulo_1.y -= vel;
    }
    if(tecla == "ArrowDown"){
        retangulo_1.y += vel;
    }
    if(tecla == "ArrowLeft"){
        retangulo_1.x -= vel;
    }
    if(tecla == "ArrowRight"){
        retangulo_1.x += vel;
    }

})



document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    bola.x = x_mouse;
    bola.y = y_mouse;
})