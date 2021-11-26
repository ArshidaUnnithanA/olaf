var bj
var olaf,olafImg
function preload(){

  bj=loadImage("snow2.jpg")
  olafImg=loadImage("olaf.png")
}




function setup() {
  createCanvas(800,400);
 olaf= createSprite(100, 310, 50, 50);
 olaf.addImage(olafImg)
 olaf.scale=0.3
}

function draw() {
  background(bj);
if (keyDown("RIGHT_ARROW")){
  olaf.x=olaf.x+3
}  
if(keyDown("LEFT_ARROW")){
  olaf.x=olaf.x-3
}
  drawSprites();
}