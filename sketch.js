var PLAY
var END
var gameState

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground, groundimage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  monkey = createSprite(50,260,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
    invisibleGround = createSprite(200,275,400,10);
  invisibleGround.visible = false;                       
  
  monkey.collide(invisibleGround);
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  ground = createSprite(0,280,400,20);
  ground.shapeColor=("brown")
  ground.scale= 1
  ground.x = ground.width /2;
  
  score = 0
  
  obstacleGroup=createGroup();
  
}


function draw() {

  background("lightblue")
  text("Survival time: "+ score, 200,50)
  
   if(gameState === PLAY) {
     
     score = score + Math.round(getFrameRate()/60);
    
     if (keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
     }
     
     monkey.velocityY = monkey.velocityY + 0.8
     
   }
     
  monkey.collide(invisibleGround);   
  spawnObstacles()
     drawSprites();
}

function reset () {
  
  gameState=PLAY;
  gameOver.visible=false
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  score=0
  
}


function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,250,10,40);
   obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
     
                       
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
  
   
    obstacleGroup.add(obstacle);
 }
}


