
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const carro = {
    x: 150,
    y: 150,
    raio: 50,
    img: new Image(),

   
    desenha: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const largura = 2 * this.raio;
        const altura = 2 * this.raio; 

    
        const x_centralizado = this.x - largura / 2;
        const y_centralizado = this.y - altura / 2;

        
        ctx.drawImage(this.img, x_centralizado, y_centralizado, largura, altura);
    }
};


carro.img.src = 'bmw.png';


carro.img.onload = function() {
    carro.desenha();
};


document.addEventListener("mousemove", function(evento) {
    const rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;   
    let y_mouse = evento.clientY - rect.top;     

    const largura = 2 * carro.raio;
    const altura = 2 * carro.raio;


    x_mouse = Math.max(largura / 2, Math.min(x_mouse, canvas.width - largura / 2));
    y_mouse = Math.max(altura / 2, Math.min(y_mouse, canvas.height - altura / 2));

    carro.x = x_mouse;
    carro.y = y_mouse;

    carro.desenha();
});
