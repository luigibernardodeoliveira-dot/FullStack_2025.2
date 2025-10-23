let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

//Podemos desenhar várias formas geométricas com o contexto “2d”:

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(340,340,50,50);
ctx.strokeRect(340,340,50,50);
ctx.closePath();

// linhas

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();


// arco 

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d")

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.fillRect(10,10,50,50);
ctx2.strokeRect(10,10,50,50);
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.fillRect(10,340,50,50);
ctx2.strokeRect(10,340,50,50);
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.fillRect(340,10,50,50);
ctx2.strokeRect(340,10,50,50);
ctx2.closePath();

// retângulos
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.fillRect(340,340,50,50);
ctx2.strokeRect(340,340,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.moveTo(400,0);
ctx2.lineTo(0,400);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,0);
ctx2.lineTo(400,400);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.stroke();
ctx2.closePath();


ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'green';
ctx2.arc(100,170,15,0.0*Math.PI,3.0*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(300,170,15,0.0*Math.PI,3.0*Math.PI);
ctx2.stroke();
ctx2. lineTo();
ctx2.closePath();


ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'red';
ctx2.arc(200,200,50,0.0*Math.PI,1.0*Math.PI);

ctx2. lineTo();
ctx2.closePath();






