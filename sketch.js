
function preload(){
seaImg = loadImage("sea.png");
shipAni = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}


  

function setup()
{
createCanvas(1500, 1500);

  sea = createSprite(200, 200, 1500, 1500);
  sea.addImage(seaImg);
  sea.velocityX = -4;
  sea.scale  = 0.5;

  if (sea.x < 0)
  {
    sea.x = sea.width/2;
  }

  ship = createSprite(400, 400);
  ship.addAnimation("shipAni", shipAni);
  ship.scale = 0.3
}

function draw() 
  {

  if (sea.x < 0)
    {
      sea.x = width/2;
    }
    drawSprites();
  }