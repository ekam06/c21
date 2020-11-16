



function setup() {
  createCanvas(800,400);
  A=createSprite(400, 200, 70, 30);
A.shapeColor="pink"

B=createSprite(500,20,30,40)
B.shapeColor="pink"

C=createSprite(200,200,40,40)
C.shapeColor="pink"

D=createSprite(500,500,40,40)
D.shapeColor="pink"


B.velocityY=4
D.velocityY=-4
}

function draw() {
  background(255,255,255); 
  
  
  A.y=mouseY
  A.x=mouseX




 if( istouching(A,C)){
  A.shapeColor="black"
  C.shapeColor="black"

 }
 else{

  A.shapeColor="pink"
  C.shapeColor="pink"
 }
 bounceoff(B,D)
 
  drawSprites();
}
