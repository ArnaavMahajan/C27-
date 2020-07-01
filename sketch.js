var pendulum,string,block;

function setup() {
  createCanvas(400,400);
 pendulum=createSprite(200,300,100,100);
 string=createSprite(200,200,30,100);

}

function draw() {
  background("white");  
  pendulum.shapeColor=color(255,0,0);
  pendulum.x=mouseX;
  pendulum.y=mouseY;
  string.shapeColor=color(0,255,0);

  drawSprites();
}