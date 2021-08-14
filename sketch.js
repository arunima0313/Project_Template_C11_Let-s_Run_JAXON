var path, pathImage, invisibleBoundry_left, invisibleBoundry_right;
var runner,runnerAnimation,runner_collided;
function preload(){
  //pre-load images
    pathImage = loadImage("path.png");
    runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
    
   
}

function setup(){
  createCanvas(400,400);
  //create sprites here
    path = createSprite(200,200,20,50);
    path.addImage("path",pathImage );
    path.velocityY = 4;

    runner = createSprite(300,300,20,50);
    runner.addAnimation("running",runnerAnimation);
    runner.scale = 0.1;

    invisibleBoundry_left = createSprite(30,200,20,400);
    invisibleBoundry_left.visible = false;

    invisibleBoundry_right = createSprite(380,200,20,400);
    invisibleBoundry_right.visible = false;
}

function draw() {
  background("white");

  if(path.y > 400){
      path.y = height/2;
  }
    
    runner.x = World.mouseX;
  
    runner.collide(invisibleBoundry_left);
    runner.collide(invisibleBoundry_right);
  
  drawSprites();
}
