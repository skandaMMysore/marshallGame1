
var form,player;
var btn;

//create sprite for leader, robber1,robber2,robber3
var leader,leaderStand, leaderJump, leaderShoot
var robber1,robber2,robber3,robberImage;

//sprite for marshal
var marshal,marshalStand, marshalJump, marshalShoot;
//creating a gameState with all the elements of form
var gameState = 5;
var gameState1 = "start";
//creating a different background in uncle scene
var background2;

var evidence = 0;
var score = 0


//b1,b2,b3,b4,b5 = background images

function preload(){
  bgImage = loadImage("images/equips/woods2.jpg");
  clifImage = loadImage("images/equips/cLIFF.jpg");
  robberyImage = loadImage("images/backgrounds/bankscene.jpeg");
  bagImage = loadImage("images/equips/bags.png");
  
  //animation because there are jumps scenes
  leaderStand = loadAnimation("images/robber/leaderStand.png");//leader standing
  leaderJump = loadAnimation("images/robber/TerrorJump.png")//leader jumping and for group of animations use ',' and add images
  leaderShoot = loadAnimation("images/robber/leaderShoot.png");//shooting img of leader
  robberImage = loadAnimation("images/robber/Terror.png");//terrorist image standing to be loaded
  marshalImage = loadAnimation("images/marshal/marshall.png")//to load marshall image standing
  ropeImage = loadImage("images/equips/rope.png");
  gunImage = loadImage("images/equips/gun (2).png");
  skateImage = loadImage("images/equips/skates.png");
  hillImage = loadImage("images/equips/hills.png");
  roostImage = loadImage("images/equips/roost.png");
  weatherImage = loadImage("images/equips/weather11.jpg");
  streakImage = loadImage("images/equips/streak11.png");
  rope4Image = loadImage("images/equips/rope4.png");
  gun2Image = loadImage("images/equips/M1.png");
  rookeImage = loadImage("images/equips/C2.png");
  gun3Image = loadImage("images/equips/P18.png");
  burgerImage = loadImage("images/equips/burger11.png");
  walkieImage = loadImage("images/equips/walkie.png");
  bottleImage = loadImage("images/equips/bottleImage.png");
  
  screensaverImage = loadImage("images/equips/mountains.jpg");
  
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form();

  btn = createButton('NEXT')
  btn.position(1400,550);
  btn.style('height', '50px');
  btn.style('width', '100px');

  //create the sprite for all of them at random position
  marshal=createSprite(100,200);
  marshal.addAnimation("stand",marshalImage);
  marshal.scale=0.2;
  marshal.x = width/2;
  marshal.y = height-100;

  
  leader=createSprite(100,300);
  leader.addAnimation("stand",leaderStand);
  leader.scale=0.2;

  robber1=createSprite(200,300)
  robber1.addAnimation("stand",robberImage);
  robber1.scale=0.2

  robber2=createSprite(300,300)
  robber2.addAnimation("stand",robberImage);
  robber2.scale=0.2

  robber3=createSprite(400,300)
  robber3.addAnimation("stand",robberImage);
  robber3.scale=0.2

  talkie = createSprite(random(500,1000),random(500,700),50,50)
  talkie.addImage(walkieImage);
  talkie.visible = false;

  lasergroup = createGroup();
  robbersgroup = createGroup();
  
   gun = createSprite(marshal.x,marshal.y-50);
   gun.addImage(gun3Image);
   
  
}

function draw() {
  //when v key gets pressed the gameState gets changed to that of form
 /* if(keyCode === 118){
    gameState = 0;
    marshal.visible = false;
  }
*/
console.log(gameState)

//displaying form
  if(gameState ==0){
    background(bgImage);
    form.display();
    btn.mousePressed(() =>{
      //changing gamestate to 0.2
      gameState = 0.2;
      form.hide();  
     //bag.visible = false;
      roost.visible = false;
      weather.visible = false;
      rope.visible = false;
      hill.visible = false;
      talkie.visible = false;
      clear()
    });
   
  }


/*differnt guns diamonds etc  
  if(gameState ==0.1){
    background(bgImage);
    form.hide();
    
    //when key z is pressed
    if(keyCode === 90){
      form.hide();
      gameState = 0.2;
      clear()
    }
  }
*/

//robbery scene
  if(gameState ==0.2){
    clear();
    background(robberyImage);
    form.hide();
    text(mouseX+ ","+ mouseY,mouseX,mouseY);
    textSize(30);
    fill("white");
    text("help the robber to catch the bag",50,50);

    robber1.visible = true;
    robber2.visible = true;
    robber3.visible = true;
    //gun1.visible = false;
    var bag  = createSprite(1173,473);
    bag.scale = 0.8;
    bag.addImage(bagImage);

    //controls for robbers and the leader in the bank for robbery to happen
    //right key
    if(keyCode === RIGHT_ARROW){
      robber1.x = robber1.x + 2;  
    }
    // left key
    if(keyCode === LEFT_ARROW){
      robber1.x = robber1.x - 2;
    }
    //key up
    if(keyCode === UP_ARROW){
      robber1.y = robber1.y - 2;
    }
    //key down
    if(keyCode === DOWN_ARROW){
      robber1.y = robber1.y + 2;
    }
    if(robber1.isTouching(bag)){
      bag.destroy();
      text("Click on Next to continue",250,300);
    }
  
    btn.mousePressed(() =>{
      //changing gamestate to 1
      gameState = 1;
      console.log(gameState);
    });
  }


//marshall launch  
  if(gameState === 1){
    clear()
    //bag.visible=false
    background(clifImage);
    text(mouseX+ ","+ mouseY,mouseX,mouseY);

    marshal.visible = true;
    marshal.scale=0.3;
    textSize(30);
    stroke("black");
    text("press up,down,left and right to move marshal",520,45);
    if(keyIsDown(RIGHT_ARROW)){
      marshal.x = marshal.x + 9;  
    }
    // left key
    if(keyIsDown (LEFT_ARROW)){
      marshal.x = marshal.x - 2;
    }
    //key up
    if(keyIsDown(UP_ARROW)){
      marshal.y = marshal.y - 2;
    }
    //key down
    if(keyIsDown(DOWN_ARROW)){
      marshal.y = marshal.y + 2;
    }
    
    
    if(frameCount % 80 === 0){
      talkie.visible=true;
      talkie.scale=0.3;
    }
      if(marshal.isTouching(talkie)){
        talkie.visible=false;
        marshal.setVelocity(0,0);
        textSize(30);
        strokeWeight(3.5);
        stroke("black");
        textSize(25);
        text("Hey Marshall! There is a new mission for you\n",400,200);
        
     }
  
    robber1.visible = false;
    robber2.visible = false;
    robber3.visible = false;
    leader.visible=false;

    btn.mousePressed(() =>{
      gameState = 2;
      console.log(gameState);
    });
  }

  
//crime scene inspection
  if(gameState ==2){
    clear();
    background(robberyImage);
    robber1.visible = false;
    robber2.visible = false;
    robber3.visible = false;
    leader.visible = false;
    marshal.visible = true;
    talkie.visible=false;
    //bag.visible=false

    textSize(30);
    strokeWeight(5);
    stroke("black");
    text("Evidence "+evidence,500,50);


    text(mouseX+ ","+ mouseY,mouseX,mouseY);
    var burger = createSprite(1200,480,100,100);
    burger.addImage(burgerImage);
    burger.scale=0.2;

    var bottle = createSprite(700,800);
    bottle.addImage(bottleImage);
    bottleImage.scale = 0.15;

    var footprint =createSprite(800,200);
    footprint.shapeColor ="brown";

    textSize(25);
    strokeWeight(3.5);
    stroke("black");
      if(mousePressedOver(burger)){
        marshal.x = burger.x;
        marshal.y = burger.y;
        evidence = evidence + 1;
        burger.destroy();
        text("Evidence collected",200,190);
      }
      if(mousePressedOver(bottle)){
        marshal.x = bottle.x;
        marshal.y = bottle.y;
        evidence = evidence + 1;
        bottle.destroy();
        text("Evidence collected",200,190);
      }
      if(mousePressedOver(footprint)){
        marshal.x = footprint.x;
        marshal.y = footprint.y;
        evidence = evidence + 1;
        footprint.destroy();
        text("Evidence collected",200,190);
      }
      
    if(evidence >= 5){
      textSize(50);
      text("Congrats you have collected all the evidences",500,650);
      text("Click on next button to play ahead");
      
      btn.mousePressed(() =>{
        gameState = 3;
        console.log(gameState);
      });
    }
    
  }
  
//marshal will search robbers 
  if(gameState === 3){
    var back = createSprite(0,0,displayWidth,displayHeight);
    back.addImage(screensaverImage);

    marshal = createSprite(500,200);
    marshal.scale = 0.5;
    marshal.addImage(marshalImage);
    //marshal comes first and then background
    marshal.depth = back.depth+1;
    
    btn.mousePressed(() =>{
      gameState = 4;
      console.log(gameState);
    });


    
  }

//find the robber  
  if(gameState ===4){

    marshal.x = width/2;
    marshal.y = height-100;
    
  }
//battle 
  if(gameState ===5){
    background("black");
    robber1.visible = false;
    robber2.visible = false;
    robber3.visible = false;
    leader.visible = false;
    marshal.visible = true;
    gun .visible = true
    gun.x = marshal.x
    gun.y=marshal.y-30

    btn.hide()
    edges = createEdgeSprites();
    marshal.bounceOff(edges);
    textSize(30)
    text("SCORE : "+ score, 50,100)
    

    if(gameState1 === "start"){
     
      spawnrobber();
      
      if(keyCode === LEFT_ARROW){
        marshal.x = marshal.x - 50
      }
      
      if(keyCode === RIGHT_ARROW){
        marshal.x = marshal.x + 50
      }
      
      if(keyDown("space")){
        laserss();  
      }
    
      if(lasergroup.isTouching(robbersgroup)){
        textSize(50);
        score = score + 1;
          for(i=0; i<robbersgroup.length; i++){
            console.log(robbersgroup.get(i).depth+" robber");
            robbersgroup.get(i).destroy();
          }
        
          for(i=0; i<lasergroup.length; i++){
              console.log(lasergroup.get(i).depth+" laser");
            lasergroup.get(i).destroy();
          }
      }
      
      if(robbersgroup.isTouching(marshal)){
        gameState1 = "end"; 
      }
  }
    else if(gameState1 === "end"){
      robbersgroup.setLifetimeEach (-1)
      robbersgroup.setVelocityYEach(0);
      
      textSize(40);
      fill("red");
      text("GAME OVER",245,260);
      
      lasergroup.setVelocityYEach (0);
      lasergroup.setLifetimeEach(-1)
    }
  }
  
  
  drawSprites();
  
}


function laserss(){
  laser = createSprite(marshal.x,marshal.y,10,30)
  laser.velocityY = -3;
  laser.shapeColor = "green";
  laser.lifetime = 200;
  lasergroup.add(laser);
}

function spawnrobber (){
  if(frameCount % 55 === 0){
    robber = createSprite(375,20,30,30);
    robber.x = Math.round(random(50,width-100));
    robber.y = 20;
    robber.velocityY = 8;
    robber.scale = 0.2;
    robber.lifetime = 870;
    robber.debug = true;
    robber.setCollider("circle",0,0,190);
    robber.addAnimation("run",robberImage);
    robbersgroup.add(robber); 

    console.log(robber.x);
  }
 }

