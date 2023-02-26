let canvas=document.getElementById(`game`);
let ctx= canvas.getContext("2d");

canvas.width = 600;
canvas.hight = 600;
let background = new Image();
background.src = "images/space.png";

function game (){
ctx.drawImage(background,0,0,canvas.width,canvas.hight)
}
setInterval(game,1000/60)