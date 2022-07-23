var arma , armaImg ;
var laserImg;
var score;
var fantasmasImg;
var aro_azul,aro_azulImg;
var explocion,explocionImg;
var player,playerImg;
var laser, laserAnimation;
var sound;
var musica;
var polvo,polvoAnimated;
var greenB;
var laserGroup;
var playerGoup;
var dano,danoImg;
var gameover,gameoverImg;
var vida;
var coco,nari,bob,knightH,knightM,littleprinces,garam;
var cocoImg,nariImg,bobImg,knightHImg,knightMImg,littleprincesImg,garamImg;
var pared,paredImg;
var techo,techoImg;
var invisibleGround;
var paredA,paredB,paredC;

function preload(){
  paredImg = loadImage("imagenes/1658537962699.png");
  techoImg = loadImage("imagenes/1658538006117.png");
  fantasmasImg = loadImage("fantasma.gif");
  armaImg = loadImage("imagenes/canonL.png");
  playerImg = loadImage("imagenes/sohee1.gif");
  sound = loadSound("sonidoArma.mp3");
  musica = loadSound("musica de fondo.mpeg");
  laserAnimation = loadAnimation("imagenes/rayo1.png","imagenes/rayo2.png","imagenes/rayo3.png","imagenes/rayo2.png","imagenes/rayo4.png","imagenes/rayo5.png","imagenes/rayo6.png","imagenes/rayo7.png","imagenes/rayo8.png","imagenes/rayo9.png",
   "imagenes/rayo10.png","imagenes/rayo5.png","imagenes/rayo6.png","imagenes/rayo1.png","imagenes/rayo2.png","imagenes/rayo3.png","imagenes/rayo11.png","imagenes/rayo1.png","imagenes/rayo12.png","imagenes/rayo13.png");
  polvoAnimated = loadAnimation("a.gif");
  danoImg = loadAnimation("b.gif");
  gameoverImg = loadAnimation("Iq2Y.gif");
 cocoImg = loadImage("coco.gif");
 nariImg = loadImage("nari.gif");
 bobImg = loadImage("bob.gif");
 knightHImg = loadImage("caballero.gif");
 knightMImg = loadImage("caballera.gif");
 littleprincesImg = loadImage("littleprinces.gif");
 garamImg = loadImage("garam.gif");
 
}

function setup() {
  createCanvas(800,600);
 
  musica.play();
  score = 0;
  vida = 5;
  greenB = new Group();
  greenB1 = new Group();
  greenB2 = new Group();
  laserGroup = new Group();
  invisibleGroup = new Group();
  playerGoup = new Group();
  genteGroup = new Group();

  player = createSprite(400,390,20,20);
  player.addImage(playerImg);
  player.scale = 0.5;
  playerGoup.add(player);

  arma = createSprite(player.x + 33,player.y + 23,20,20);
  arma.addImage(armaImg);
  arma.scale = 0.2
  
  laser = createSprite(-344,-342,20,20);
  laser.addAnimation("laser",laserAnimation);
  laser.scale = 0.3;
  polvo = createSprite(300,250,20,20);

  dano = createSprite(-999,-999,20,20);
  dano.addAnimation("dano",danoImg);
  dano.scale = 1;

  gameover= createSprite(-999,-999,20,20);
  gameover.addAnimation("game",gameoverImg);
  gameover.scale= 2;

  pared = createSprite(400,510,20,20);
  pared.addImage(paredImg);

  techo = createSprite(125,50,20,20);
  techo.addImage(techoImg);
  techo.scale=1.5;
  techo = createSprite(348,50,20,20);
  techo.addImage(techoImg);
  techo.scale=1.5;
  techo = createSprite(550,50,20,20);
  techo.addImage(techoImg);
  techo.scale=1.5;
  techo = createSprite(750,50,20,20);
  techo.addImage(techoImg);
  techo.scale=1.5;

  invisibleGround = createSprite(-30,90,1900,20);
  invisibleGround.visible = false;
  invisibleGroup.add(invisibleGround);
  paredA = createSprite(-30,580,1900,20);
  paredA.visible = false;
  invisibleGroup.add(paredA);
  paredB = createSprite(60,50,20,1700);
  paredB.visible = false;
  invisibleGroup.add(paredB);
  paredC = createSprite(690,50,20,1700);
  paredC.visible = false;
  invisibleGroup.add(paredC);
//////////////// gente ////////////
  coco = createSprite(25,100,20,20);
  coco.addImage(cocoImg);
  coco.scale = 0.4;
  genteGroup.add(coco);

  garam = createSprite(25,170,20,20);
  garam.addImage(garamImg);
  garam.scale = 0.5;
  genteGroup.add(garam);

  nari = createSprite(25,240,20,20);
  nari.addImage(nariImg);
  nari.scale = 0.3;
  genteGroup.add(nari);

  littleprinces = createSprite(25,300,20,20);
  littleprinces.addImage(littleprincesImg);
  littleprinces.scale = 0.4;
  genteGroup.add(littleprinces);

  knightH = createSprite(25,375,20,20);
  knightH.addImage(knightHImg);
  knightH.scale = 0.4;
  genteGroup.add(knightH);

  knightM = createSprite(25,455,20,20);
  knightM.addImage(knightMImg);
  knightM.scale = 0.4;
  genteGroup.add(knightM);

  bob = createSprite(25,535,20,20);
  bob.addImage(bobImg);
  bob.scale = 0.3;
  genteGroup.add(bob);


}

function draw() {
  background("black");

 
 
  polvo.addAnimation("polvo",polvoAnimated);
  polvo.scale =4;
  
  
  /////////// CONTROLES ////////////

  if(keyDown("w")){
    player.y = player.y -5;
    arma.y = arma.y -5;
    sound.stop();
    laser.x = -344;
    laser.y = -344;
    dano.x = player.x;
    dano.y = player.y;
    dano.visible = false;
   arma.x =  player.x + 33;
   arma.y = player.y + 23;
  }
  if(keyDown("s")){
    player.y = player.y +5;
    arma.y = arma.y +5;
    sound.stop();
    laser.x = -344;
    laser.y = -344;
    dano.x = player.x;
    dano.y = player.y;
    dano.visible = false;
    arma.x =  player.x + 33;
   arma.y = player.y + 23;
  }
  if(keyDown("a")){
    player.x = player.x -5;
    arma.x = arma.x -5;
    sound.stop();
    laser.x = -344;
    laser.y = -344;
    dano.x = player.x;
    dano.y = player.y;
    dano.visible = false;
    arma.x =  player.x + 33;
    arma.y = player.y + 23;
  }
  if(keyDown("d")){
    player.x = player.x +5;
    arma.x = arma.x +5;
    sound.stop();
    laser.x = -344;
    laser.y = -344;
    dano.x = player.x;
    dano.y = player.y;
    dano.visible = false;
    arma.x =  player.x + 33;
   arma.y = player.y + 23;
  }
  if(keyWentDown("space")){ 
    laser.x = player.x + 155;
    laser.y = player.y + 20; 
    laserGroup.add(laser);
     sound.play();
  }
  if(keyWentUp("space")){
    laser.x = -344;
    laser.y = -344;
    sound.stop();
  }
  if(greenB.isTouching(laserGroup)){
     greenB.destroyEach();
     score = score + 1;
  }
  if(greenB1.isTouching(laserGroup)){
    greenB1.destroyEach();
    score = score + 2;
 }
 if(greenB2.isTouching(laserGroup)){
  greenB2.destroyEach();
  score = score + 1.5;
}
  if(greenB.isTouching(playerGoup)){
   greenB.destroyEach();
    score = score - 5;
    dano.x = player.x;
    dano.y = player.y;
 }
 if(score == 10 || score >10){
  dano.visible = true;
  
 }
 if(vida < 1){
  gameover.x = 400;
  gameover.y = 300;
  gameover.depth +1;
  greenB.destroyEach();
  greenB1.destroyEach();
  greenB2.destroyEach();
  genteGroup.destroyEach();
  musica.stop();
 }
 if(genteGroup.isTouching(greenB) || genteGroup.isTouching(greenB2) || genteGroup.isTouching(greenB1)){
  if (frameCount % 15 == 0) {
  vida = vida - 1;
  }
 }

 spawnEnemy();


 
 playerGoup.collide(invisibleGroup);   
 
  drawSprites();

 fill("white");
  text("controles 'A W S D' para moverse" , 600,560);
  text("'Espacio' para encender el laser" , 600,575);
  text("!cada 10 puntos obtienes una mejora!" , 590,590);
  
 ///////////// nombres de los jugadores //////////
 fill("white");
 text("sohee",player.x - 10,player.y - 40);

 text("Garam",garam.x - 15,garam.y - 25);
 text("Nari",nari.x - 1,nari.y - 20);
 text("Coco",coco.x - 15,coco.y - 30);
 text("LittlePrincess",littleprinces.x -25,littleprinces.y - 20);
 text("caballero",knightH.x - 15,knightH.y - 30);
 text("Bob",bob.x - 10,bob.y - 30);
 text("caballera",knightM.x - 15,knightM.y - 30);
  
 textSize(23);
 fill("blue");
 text("puntuacion:" + score, 30,20);
 text("vidas :"+ vida,30,40);
 fill("red");
  text("no dejes que los fantasmas llegen a las personas",200,20);
}
function spawnEnemy(){
  if(frameCount % 80 === 0){
     var fantasma = createSprite(790,random(100, 750), 20, 20);
    fantasma.velocityX = -5;
    fantasma.addImage(fantasmasImg)
    fantasma.setLifetime = 300;
    fantasma.scale =0.3;
    fantasma.setCollider("circle",0,0,10);
    greenB.add(fantasma);
  }
  if(frameCount % 100 === 0){
    var fantasma2 = createSprite(790,random(100, 750), 20, 20);
   fantasma2.velocityX = -7;
   fantasma2.addImage(fantasmasImg)
   fantasma2.setLifetime = 300;
   fantasma2.scale =0.3;
   fantasma2.setCollider("circle",0,0,10);
   greenB2.add(fantasma2);
 }
  if(frameCount % 200 === 0){
    var fantasma1 = createSprite(random(60,550),1, 20, 20);
   fantasma1.velocityY = +6;
   fantasma1.addImage(fantasmasImg)
   fantasma1.setLifetime = 500;
   fantasma1.scale =0.3;
   fantasma1.setCollider("circle",0,0,10);
   greenB1.add(fantasma1);
 }
}
