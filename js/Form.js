class Form{
    constructor(){
       this.title = createElement('h1');
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h1');
       this.cheer = createElement('h2');
       this.reset = createButton('Reset');
       //button created for selecting rope from the user
       this.button1 = createButton('selectRope');
      this.button2 = createButton('Gun3');
       
    }
    hide(){
       
        this.button.hide();
        this.button2.hide();
        this.input.hide();
        this.title.hide();
        this.greeting.hide();
        this.cheer.hide();

    }
    display(){
        this.title.html("THE MARSHAL");
        this.title.position(480,30);
        this.title.style('font-size', '60px');
        this.title.style('color', 'blue');
        
        this.cheer.html("Are you ready to play this mysterious game?");
        this.cheer.position(420,100);
        this.cheer.style('font-size', '50px');
        this.cheer.style('color', 'red');

        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        //button 2 created for selecting the gun3
        this.button2.html("Gun3");
        this.button2.style('width','350px');
        this.button2.style('height','45px');
        this.button2.position(160,200);
    
    
        this.reset.position(900,660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            //whatever the input value had been entered first is getting assigned to a variable of name and hello s getting displayed with reference to it
            var player = this.input.value();
            
            this.greeting.html("Hello "+ player);
            this.greeting.position(560,400);
            

        });
        //when button2 gets pressed then your streaks gets reduced cause of buying the gun3
        this.button2.mousePressed(() =>{
            streaks = streaks - 15;
        });

        this.reset.mousePressed(() => {
           //do later
        });
        
        if(keyCode === LEFT_ARROW){
        
        stroke("black");
        strokeWeight(4.0);
        fill("brown");
        rect(500,400,700,250);
       
        
        
        


        var rope = createSprite(815,330);
        rope.scale = 0.3;
        rope.addImage(ropeImage);

        //hill is for just a small display
        var hill = createSprite(570,480);
        hill.scale = 0.2;
        hill.addImage(hillImage);


        //weather is same as hill

        var weather = createSprite(560,570);
        weather.scale = 0.2;
        weather.addImage(weatherImage);

       //creating a gun1 sprite with its image
       //var americano = createSprite(780,390);
       //americano.addImage();


        
      

       //making sprite of roost
       var roost = createSprite(615,330);
       roost.scale = 0.3;
       roost.addImage(roostImage);

       //created the stinger sprite
       
       //var stinger = createSprite(645,330);
       //stinger.scale = 0.3;
       //stinger.addImage(roostImage);

       
        

         //text for showing the rope description
        textSize(25);
        strokeWeight(1.5);
        stroke("lightBlue");
        text("1.1",600,425);

        textSize(20);
        strokeWeight(1.4);
        stroke("lightBlue");
        text("3m",620,490);

        textSize(20);
        strokeWeight(2.4);
        stroke("pink");
        text("+25 degree",610,565);

        //displaying the streaks button for points and stuff
        
        
        
        stroke("black");
        strokeWeight(3.5);
        rect(1400,200,70,70);

        textSize(20);
        strokeWeight(2);
        stroke("orange");
        text("Streaks",1400,260);

            //text for stinger rope
        textSize(20);
        strokeWeight(2.5);
        stroke("green");
        text("Stinger",785,420);

        var mountain2 = createSprite(780,485);
        
        mountain2.addImage(hillImage);
        mountain2.scale = 0.25;

        textSize(20);
        strokeWeight(2.5);
        stroke("blue");
        text("5m",835,490);
        
        //weather for the stinger
        var weather2 = createSprite(780,560);
        weather2.scale = 0.2;
        weather2.addImage(weatherImage);

        textSize(20);
        strokeWeight(2.5);
        stroke("red");
        text("-20 degree",800,590);

        var rope4 = createSprite(960,340);
        rope4.scale = 0.3;
        rope4.addImage(rope4Image);

        var mountain3 = createSprite(940,500);
        mountain3.scale = 0.25;
        mountain3.addImage(hillImage);

        var streakImage = createSprite()




      
        

        //hiding all the inputs and buttons
        this.input.hide();
        this.button.hide();
        this.reset.hide();

        
        leader.visible = false;
        marshal.visible = false;
        robber1.visible = false;
        robber2.visible = false;
        robber3.visible = false;
        //bag.visible = false;
        //when A key gets pressed he streakshot function gets executed 
        if(keyCode === 65){
            var streak = createSprite(1100,350,50,50);
            //streak.addImage(streakImage);


            var streaks = 50;

            textSize(20);
            strokeWeight(1.5);
            stroke("yellow");
            text("Your Streaks are:"+ streaks,1200,450);
            drawSprites();

        }
        //this is for the purchase of gun1 in which the current streaks get reduced by5 since the price of the gun is 5dollar when key pressed is g
        if(keyCode === 72){
            streaks = streaks - 5;
        }
        if(keyCode === 67){
            streaks = streaks - 10;
        }
        
        drawSprites();
        }
        //when b value gets pressed rope changes to spring2 rope
        if(keyCode === UP_ARROW){
           //creating gun1
            var gun1 = createSprite(120,100);
            gun1.scale = 0.6;
            gun1.addImage(gunImage);

            var gun2 = createSprite(120,250);
            gun2.scale = 0.6;
            gun2.addImage(gun2Image);

            var gun3 = createSprite(120,390);
            gun3.scale = 0.6;
            gun3.addImage(rookeImage);

            var gun4 = createSprite(120,560);
            gun4.scale = 0.6;
            gun4.addImage(gun3Image);

            var rope = createSprite(815,330);
        rope.scale = 0.3;
        rope.addImage(ropeImage);

        //hill is for just a small display
        var hill = createSprite(570,480);
        hill.scale = 0.2;
        hill.addImage(hillImage);

        stroke("black");
        strokeWeight(4.0);
        fill("brown");
        rect(500,400,700,250);

        talkie.visible = false;


        //weather is same as hill

        var weather = createSprite(560,570);
        weather.scale = 0.2;
        weather.addImage(weatherImage);

       //creating a gun1 sprite with its image
       //var americano = createSprite(780,390);
       //americano.addImage();

       //making sprite of roost
       var roost = createSprite(615,330);
       roost.scale = 0.3;
       roost.addImage(roostImage);

       //created the stinger sprite
       
       //var stinger = createSprite(645,330);
       //stinger.scale = 0.3;
       //stinger.addImage(roostImage);

        //text for showing the rope description
        textSize(25);
        strokeWeight(1.5);
        stroke("lightBlue");
        text("1.1",600,425);

        textSize(20);
        strokeWeight(1.4);
        stroke("lightBlue");
        text("3m",620,490);

        textSize(20);
        strokeWeight(2.4);
        stroke("pink");
        text("+25 degree",610,565);

        //displaying the streaks button for points and stuff
        
        
        
        stroke("black");
        strokeWeight(3.5);
        rect(1400,200,70,70);

        textSize(20);
        strokeWeight(2);
        stroke("orange");
        text("Streaks",1400,260);

            //text for stinger rope
        textSize(20);
        strokeWeight(2.5);
        stroke("green");
        text("Stinger",785,420);

        var mountain2 = createSprite(780,485);
        
        mountain2.addImage(hillImage);
        mountain2.scale = 0.25;

        textSize(20);
        strokeWeight(2.5);
        stroke("blue");
        text("5m",835,490);
        
        //weather for the stinger
        var weather2 = createSprite(780,560);
        weather2.scale = 0.2;
        weather2.addImage(weatherImage);

        textSize(20);
        strokeWeight(2.5);
        stroke("red");
        text("-20 degree",800,590);


        fill("red");
        strokeWeight(4.5);
        stroke("black");
        rect(190,100,160,600);
        

        var rope4 = createSprite(960,340);
        rope4.scale = 0.3;
        rope4.addImage(rope4Image);

        var mountain3 = createSprite(940,500);
        mountain3.scale = 0.25;
        mountain3.addImage(hillImage);

        textSize(15);
        strokeWeight(2.5);
        stroke("green");
        text("MP1",230,120);

       

            
           
        
        }

        //if(gameState === "PLAY"){
        //rope.visible = false;

        //var b1 = createSprite(200,500,50,50);
        

        //drawSprites();

        //}


             
             
              

            
        //if m key gets pressed then rope gets displayed
        //if(keyCode === 75){
            
            


            //drawSprites();
            
        //}
        //when m key gets pressed then the below code gets executed
        //if(keyCode === 109){
            
            
        //}
        




        
        //creating a function for work of streaks
        function streakshot(){
            //if key F gets pressed, then the code below gets executed
            
                 
                
                //for displaying streaks with an image in it
                var streak = createSprite(1100,350);
                streak.addImage(streakImage);

                drawSprites();
        }  
        //promos to be applied for discounts and stuff to be fulfilled using streaks
        function promos(){
            var m1Promo = "A112";
            var ropePromo = "C2";
            var roostPromo = "S2";
            
        }
                
           
            
            

            
        
        
       



        
        


       
    

       
}
    
    
}
            