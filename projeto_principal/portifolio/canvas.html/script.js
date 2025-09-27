let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")



function quadrados( tamanho, cor1, x,y ){
ctx.beginPath();
ctx.fillStyle = cor1;
ctx.fillRect(x,y,tamanho,tamanho);
ctx.closePath();
}
quadrados(50,'blue',0,0);
quadrados(50,'red',250,0);
quadrados(40,'red',110,150);
quadrados(50,'rgb(0, 255, 255)',-25,125);
quadrados(30,'rgb(0, 255, 255)',275,135);




function linhas( x1,y1,x2,y2, cor2 ){
ctx.beginPath();
ctx.strokeStyle = cor2;
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke();
ctx.closePath();
}
linhas(0,0,150,150,'blue');
linhas(300,0,150,150,'red');
linhas(150,300,150,150,'green');
linhas(0,150,300,150,'green');


function borda(x, y, raio,corBorda, anguloInicial, anguloFinal){
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = corBorda;
ctx.arc(x, y, raio, anguloInicial, anguloFinal);
ctx.stroke();
ctx.closePath();

}
borda( 150, 150, 65, 'green' , 1.0 *Math.PI, 0.0 * Math.PI);
borda( 150, 150, 87, 'green' , 1.0 *Math.PI, 1.25 * Math.PI);
borda( 150, 150, 87, 'green' , 1.75 *Math.PI, 0.0 * Math.PI);
borda( 150,330, 95, 'green' , 1.0 *Math.PI, 1.5 * Math.PI);
borda( 150,325, 75, 'green' , 1.5 *Math.PI, 2.5 * Math.PI);





function arco(x, y, raio,corPreenchimento,corBorda, anguloInicial, anguloFinal){
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = corPreenchimento;
ctx.strokeStyle = corBorda;
ctx.arc(x, y, raio, anguloInicial, anguloFinal);
ctx.fill();
ctx.stroke();
ctx.closePath();

}

  arco(150, 110, 18, 'rgb(0, 255, 255)' ,'blue', 0.0 *Math.PI, 3.0 * Math.PI);
  arco(75, 225, 18, 'rgba(212, 255, 0, 1)' ,'green', 0.0 *Math.PI, 3.0 * Math.PI);
  arco(225, 225, 18, 'rgba(212, 255, 0, 1)' ,'green', 0.0 *Math.PI, 3.0 * Math.PI);
  arco(150, 315, 50, 'rgba(0, 242, 255, 1)' ,'green', 0.0 *Math.PI, 3.0 * Math.PI);
  

function livre( x, y, largura, altura, corPreenchimento) {
  ctx.beginPath();
  ctx.fillStyle = corPreenchimento;
  ctx.fillRect(x, y, largura, altura);
  ctx.closePath();
}
livre(0,275,25,25,'yellow')
livre(0,250,25,25,'yellow')
livre(25,275,25,25,'yellow')

livre(275,275,25,25,'black')
livre(250,275,25,25,'black')
livre(275,250,25,25,'black')

function escreverTexto(texto, x, y, corTexto, alinhamento) {
  ctx.beginPath();
  ctx.fillStyle = corTexto;
  ctx.font = "20px Arial";
  ctx.textAlign = alinhamento; 
  ctx.fillText(texto, x, y);
  ctx.closePath();
}
escreverTexto("Canvas", 150, 45, "black", "center");




let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");


function retangulo(cor1,cor2,x1,y1,l2,c2,x3,y3,l4,c4){
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = cor1;
ctx2.strokeStyle = cor2;
ctx2.fillRect(x1,y1,l2,c2);
ctx2.strokeRect(x3,y3,l4,c4);
ctx2.closePath();
}                       
 retangulo('#808080', '#808080',0,220,300,80,10,10,10, )
retangulo('#8B4513', '#8B4513',101,130,98,90,10,10,10, )
retangulo('#5C3317', '#5C3317',142,175,18,45,10,10,10, )
retangulo('#4275e5ff', '#4275e5ff',0,265,120,40,0,0,10, )
retangulo('#4275e5ff', '#4275e5ff',0,215,36,100,0,0,10, )
retangulo('#A0522D', '#A0522D',50,175,18,45,10,10,10, )
retangulo('#A0522D', '#A0522D',260,230,18,45,10,10,10, )




function quadrados2( tamanho, cor1, x,y ){
ctx2.beginPath();
ctx2.fillStyle = cor1;
ctx2.fillRect(x,y,tamanho,tamanho);
ctx2.closePath();
}
quadrados2(25,'#1E90FF',160,150);
quadrados2(25,'#1E90FF',116,150);



function linhas2( cor1,c1, c2, x1, y1, x2,y2){
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = cor1;
ctx2.moveTo(c1,c2);
ctx2.lineTo(x1,y1);
ctx2.lineTo(x2,y2);
ctx2.fill();

}
linhas2('#d24c4cff', 100, 130, 150, 80, 200, 130);


function arco2(x, y, raio,corPreenchimento,corBorda, anguloInicial, anguloFinal){
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = corPreenchimento;
ctx2.strokeStyle = corBorda;
ctx2.arc(x, y, raio, anguloInicial, anguloFinal);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

}

  arco2(230, 60, 35, '#FFD700' ,'#FFD700', 0.0 *Math.PI, 3.0 * Math.PI);
  arco2(0, 215, 35, '#4275e5ff' ,'#4275e5ff', 0.0 *Math.PI, 3.0 * Math.PI);
  arco2(110, 300, 35, '#4275e5ff' ,'#4275e5ff', 0.0 *Math.PI, 3.0 * Math.PI);
  arco2(59, 160, 25, '#228B22' ,'#228B22', 0.0 *Math.PI, 3.0 * Math.PI);
  arco2(270, 210, 25, '#228B22' ,'#228B22', 0.0 *Math.PI, 3.0 * Math.PI);
  
  



