var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

//criar variável cloud e cloudImg
var cloud, cloudImg;

function preload(){

  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  //Carregar imagem de nuvem
  cloud = loadImage("cloud.png");
   
}

function setup() {

  createCanvas(600,200)
  
  //criar um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //criar um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //criar solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //Função predefinida random()
  //var rand = Math.round(random(1,1000))
  //console.log(rand);

}

function draw() {
  //definir cor do fundo
  background(180);

  // pular quando tecla espaço for pressionada
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);

  //Chamar função para gerar nuvens
  spawnCloud();
  
  drawSprites();
  
}

//criar função para gerar nuvens
function spawnCloud(){
  
  if (frameCount % 60 === 0){
    cloud = createSprite(600,100,40,10);
    cloud.velocityX = -3;
  }
}


