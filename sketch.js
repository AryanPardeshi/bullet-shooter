var bullet,wall,thikness,speed,width;
var bulletRightEdge,wallLeftEdge;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 50);
  bullet.shapeColor=color(255, 255, 255);
 
  speed=random(55,90);
  width=random(400,1500);
  wall=createSprite(1200,200,thikness,400);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  bulletRightEdge=createSprite(1200,200,20,4);

}

function draw() {
  background(255,255,255);  
  if (isCollided(bullet,wall)) 
  {
    bullet.velocityX=0;
    var deformation=0.5*width*speed*speed/22509;
    if (deformation>10) 
    {
      wall.shapeColor=color(255,0,0);
    }
    
    if(deformation<10) 
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function isCollided(lbullet,lwall) 
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}