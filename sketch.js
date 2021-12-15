var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 pathImg = loadImage("path.png")
 boyImg = loadAnimation ("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 
 path = createSprite(100,100,90,10)
 path.addImage("move", pathImg);
 path.velocityY = 3;
 path.scale=1.2;

 boy = createSprite = (200, 200, 70, 50)
 boy.addAnimation("run", boyImg)
 boy.scale=0.8;
  
 leftBoundary=createSprite(0, 0, 100, 800);
 leftBoundary.visible = false;
 rightBoundary=createSprite(410, 0, 100, 800);
 rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
