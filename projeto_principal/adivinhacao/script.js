// Seleciona o canvas e o contexto 2D
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define o objeto 'carro' com propriedades e método de desenho
const carro = {
    x: 150, // Posição inicial X (centro do canvas)
    y: 150, // Posição inicial Y
    raio: 50, // Usado para calcular o tamanho da imagem (100x100)
    img: new Image(), // Cria a imagem do carro

    // Função para desenhar o carro no canvas
    desenha: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

        const largura = 2 * this.raio; // Largura da imagem
        const altura = 2 * this.raio; // Altura da imagem

        // Calcula a posição para centralizar a imagem no mouse
        const x_centralizado = this.x - largura / 2;
        const y_centralizado = this.y - altura / 2;

        // Desenha a imagem no canvas
        ctx.drawImage(this.img, x_centralizado, y_centralizado, largura, altura);
    }
};

// Define o caminho da imagem
carro.img.src = 'bmw.png'; // Certifique-se de que 'bmw.png' está na mesma pasta

// Quando a imagem carregar, desenha pela primeira vez
carro.img.onload = function() {
    carro.desenha();
};

// Atualiza a posição do carro com base no movimento do mouse
document.addEventListener("mousemove", function(evento) {
    const rect = canvas.getBoundingClientRect(); // Pega posição do canvas na tela
    let x_mouse = evento.clientX - rect.left;    // Coordenada X do mouse relativa ao canvas
    let y_mouse = evento.clientY - rect.top;     // Coordenada Y do mouse relativa ao canvas

    const largura = 2 * carro.raio;
    const altura = 2 * carro.raio;

    // Limita a posição do centro da imagem para não sair do canvas
    x_mouse = Math.max(largura / 2, Math.min(x_mouse, canvas.width - largura / 2));
    y_mouse = Math.max(altura / 2, Math.min(y_mouse, canvas.height - altura / 2));

    // Atualiza a posição do carro
    carro.x = x_mouse;
    carro.y = y_mouse;

    // Redesenha o carro na nova posição
    carro.desenha();
});
