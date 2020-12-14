var rec1
var rec2

function setup() {
  createCanvas(900,900);
  rec1=createSprite(200, 850, 50, 50);
  rec2=createSprite(600,-50,50,50);
  rec1.shapeColor="lightblue";
  rec2.shapeColor="lightblue";
}

function draw() {
  background(245);
 rec1.x=World.mouseX;
 //rec1.y=World.mouseY;
 
 if(rec1.x-rec2.x<rec2.width/2+rec1.width/2 && rec2.x-rec1.x<rec2.width/2+rec1.width/2 && rec1.y-rec2.y<rec2.height/2+rec1.height/2 && rec2.y-rec1.y<rec2.height/2+rec1.height/2 ){
rec1.shapeColor="red";
rec2.shapeColor="red";
 }
 else{
  rec1.shapeColor="lightblue";
  rec2.shapeColor="lightblue";
 }
// if(frameCount%80===0){
  //rec2=createSprite(600,-50,50,50);
  //rec2.velocityY=2
 //}


 

  drawSprites();
}