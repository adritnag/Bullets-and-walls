var wall ,  thickness;
var bullet,  speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness= random(22,83);
  weight= random(30,21);
  speed = random(221,321)
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
  bullet = createSprite(200,200,20,10)
  bullet.shapeColor = "white";
  bullet.velocityX = speed; 
}

function draw() {
  background(0);  
  if (((0.5*bullet.density*bullet.velocityX)/(thickness*thickness*thickness))>70 && isTouching(bullet,wall)){
    bullet.shapeColor = "red";
    wall.shapeColor = "red";
  } else if (isTouching(bullet,wall)) {
    bullet.shapeColor = "green";
    bullet.shapeColor = "green";
  }
  drawSprites();
 }