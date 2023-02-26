let canvas=document.getElementById(`game`);
let ctx= canvas.getContext("2d");
import enemyControll from "./enemyControll.js";

canvas.width = 600;
canvas.hight = 600;
let background = new Image();
background.src = "images/space.png";
let EnemyControll = new enemyControll(canvas)
function game (){
ctx.drawImage(background,0,0,canvas.width,canvas.hight)
EnemyControll.draw(ctx)
}
setInterval(game,1000/60)

//enemy controller

