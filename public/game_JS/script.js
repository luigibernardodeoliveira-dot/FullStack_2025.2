let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");



// ----- CONFIGURAÇÕES DE FÍSICA -----
let gravidade = 0.8;   // força que puxa o robô pra baixo
let forcaPulo = -15;   // força do salto (negativo = sobe)
let noChao = false;    // indica se o robô está tocando o chão

// ----- OBJETO DO ROBÔ -----
let robo = {
    x: 55,          // posição horizontal inicial
    y: 420,         // posição vertical inicial
    vy: 0,          // velocidade vertical (para o pulo e gravidade)
    img: new Image(),
    width: 65,
    heigth: 70,

    // Função que desenha o robô na tela
    desenha: function() {
        this.img.src = "./robot-png-defato.png";
        ctx.drawImage(
            this.img,
            this.x - this.width / 2,
            this.y - this.heigth / 2,
            this.width,
            this.heigth
        );
    }
};

// ----- MOVIMENTO LATERAL -----
let movendo = {
    esquerda: false,
    direita: false
};

// Velocidade horizontal
let vel = 5;

// ----- FUNÇÃO QUE ATUALIZA A POSIÇÃO DO ROBÔ -----
function atualizarPosicao() {
    // Movimento lateral
    if (movendo.esquerda) robo.x -= vel;
    if (movendo.direita) robo.x += vel;

    // Aplica a gravidade: faz o robô cair
    robo.vy += gravidade;

    // Atualiza a posição vertical com base na velocidade
    robo.y += robo.vy;

    // Define a posição do chão
    const chao = canvas.height - robo.heigth / 2.5;

    // Impede que o robô atravesse o chão
    if (robo.y > chao) {
        robo.y = chao;   // fixa no chão
        robo.vy = 0;     // zera a velocidade vertical
        noChao = true;   // marca que está tocando o chão
    }

    // Impede que saia das bordas laterais do canvas
    if (robo.x < robo.width / 3) robo.x = robo.width / 3;
    if (robo.x > canvas.width - robo.width / 3) robo.x = canvas.width - robo.width / 3;
}

// ----- LOOP DE ANIMAÇÃO -----
function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // limpa a tela
    atualizarPosicao(); // atualiza o movimento e gravidade
    robo.desenha(); // redesenha o robô
    requestAnimationFrame(animacao); // repete o processo
}
animacao();

// ----- CONTROLES DO TECLADO -----
document.addEventListener("keydown", (evento) => {
    // Move para esquerda
    if (evento.key === "ArrowLeft") movendo.esquerda = true;

    // Move para direita
    if (evento.key === "ArrowRight") movendo.direita = true;

    // Faz o robô pular com a seta pra cima
    // Só pula se estiver tocando o chão
    if (evento.key === "ArrowUp" && noChao) {
        robo.vy = forcaPulo; // aplica força pra cima
        noChao = false;      // indica que saiu do chão
    }
});

// ----- QUANDO SOLTA AS TECLAS -----
document.addEventListener("keyup", (evento) => {
    if (evento.key === "ArrowLeft") movendo.esquerda = false;
    if (evento.key === "ArrowRight") movendo.direita = false;
});

function desenharPlataformas() {
    ctx.fillStyle = "#8B4513"; // cor marrom
    plataformas.forEach 
    ctx.fillRect(p.x, p.y, p.largura, p.altura);

    ;
}



