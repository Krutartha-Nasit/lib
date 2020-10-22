var fixrect,movrect,rect1,rect2,rect3,rect4;
var ob1,ob2;
function setup() {
  createCanvas(600,600);
 movrect= createSprite(100,200,50,50);
 fixrect=createSprite(300,200,50,50);
 rect1=createSprite(200,200,50,50);
 rect2=createSprite(400,200,50,50);
 rect3=createSprite(200,400,50,50);
 rect4=createSprite(570,200,50,50);
 rect1.velocityY=2;
 fixrect.velocityX=2;
 rect4.velocityX=-1;
 rect3.velocityY=-2;
}

function draw() {
  background(89,23,123);  
  movrect.x=mouseX;
  movrect.y=mouseY;
  if(isTouching(movrect,rect2)){
    movrect.shapeColor="yellow";
    rect2.shapeColor="yellow";
  }
  else{
    movrect.shapeColor="red";
    rect2.shapeColor="red";
  }
   bounceOff(fixrect,rect4);
   bounceOff(rect1 ,rect3);
 
  drawSprites();
}
