<<<<<<< HEAD
var xstart;
var ystart;
var snakehead;
var growth;
var food;
var score;
var body;
var snakebody = [];
var body;




function setup(){
  createCanvas(800,500)
  $( ":header" ).css("color", "red");
  $( ":header" ).css("font-family", "Comic Sans MS" );
  $( ":header" ).css( "textAlign", "CENTER" )
  xstart = 380;
  ystart = 160;
  growth = 10;
  score = 0;
  snakehead =createSprite(xstart,ystart,growth,10);
  snakehead.shapeColor = color(0,255,0);
  food = createSprite(random(30,500),random(50,490),10,15)
  food.shapeColor = color(255,0,0);

}

function gameover(){
  background(0)
  text(" YOU LOSE " + " Score : " + str(score), 300,300);
  // noloop();
  snakehead.shapeColor= color(122,122,122);
}


function reset(){
  background(122,122,122);
  xstart= 380;
  ystart = 260;
  background(122,122,122);
  fill(251,241,0);
  growth = 10;
  score = 0;
  snakehead =createSprite(xstart,ystart,growth,10);
  snakehead.shapeColor = color(0,255,0);
  // food = createSprite(random(30,600),random(50,600),10,15);
  snakehead.position.x=xstart;
  snakehead.position.y=ystart;
  text("Score : " + str(score),100,100);
  snakebody =[[snake.posotion.x,snake.position.y]];
}



function draw(){
	background(122,122,122);
	fill(251,241,0);

	  
	text("Score : " + str(score),100,100);


	// noStroke()
 //  	animal = ellipse(xstart,ystart,20);
  if (keyIsDown(LEFT_ARROW)){
    snakehead.velocity.x =-1;
	}
  if (keyIsDown(RIGHT_ARROW)){
    snakehead.velocity.x = +1;
	}
  if (keyIsDown(UP_ARROW)){
    snakehead.velocity.y = -1;
	}
  if (keyIsDown(DOWN_ARROW)){
    snakehead.velocity.y  = + 1;
	}    
	

	if (snakehead.collide(food)){
		food.position.x =random(180,400);
    food.position.y =random(60,300);
		score = score + 1;
    for (var i =0; i <= snakebody.length; i++) {
      snakebody[i]
      var body =createSprite(snakehead.previousPosition.x,snakehead.previousPosition.y,growth,10);
      // body.position.x = snakehead.Newposition.x;
      // body.position.y = snakehead.Newposition.y;
    }
    // snakebody =createSprite(snakehead.previosPosition,growth,10);
    // snakebody.append([snakehead.position.x,snakehead.position.y]);
	}
  
  

  if(snakehead.position.x > 798){
    gameover();
  }

  if (snakehead.position.x < 4){
    gameover();
  } 

  if (snakehead.position.y > 498){
    gameover();
  }

  if (snakehead.position.y < 4){
    gameover();
  }
	console.log(score,snakehead.position.x,snakehead.position.y);
  console.log(snakebody)
  console.log(food)


	drawSprites();
}
=======
var xstart;
var ystart;
var snakehead;
var growth;
var lastKeyPressed;
var food;
var score;

 

function setup(){
  createCanvas(800,500)
  $( ":header" ).css("color", "red");
  $( ":header" ).css("font-family", "Comic Sans MS" );
  $( ":header" ).css( "textAlign", "CENTER" )
  xstart = 380;
  ystart = 260;
  growth = 10;
  score = 0;
  snakehead =createSprite(xstart,ystart,growth,growth);
  snakehead.shapeColor = color(0,255,0);
  food = createSprite(random(180,400),random(60,300),10,15);
}


function grid(startx, starty, XScale, YScale, rowswanted, columnswanted){
   y = 0
   while (y < columnswanted){
       x = 0
       while (x < rowswanted){
           rectMode(CENTER)
           rect(startx + x*XScale, starty + y*YScale, XScale, YScale)
           x += 1
       if (x == rowswanted){
           y += 1
       	}
   		}
    }
}


function draw(){
	background(122,122,122);
	grid(180,60,10,10,40,40)
	fill(251,241,0);

	snakehead.position.x=xstart;
	snakehead.position.y=ystart;
	text("Score");


	// noStroke()
 //  	animal = ellipse(xstart,ystart,20);
  	if (keyIsDown(LEFT_ARROW)){
    xstart-=2;
	}
  	if (keyIsDown(RIGHT_ARROW)){
    xstart+=2;
	}
  	if (keyIsDown(UP_ARROW)){
    ystart-=2;
	}
  	if (keyIsDown(DOWN_ARROW)){
    ystart+=2;
	}    
	
	if (snakehead.collide(food)){
		food.visible = false;
		food = createSprite(random(180,400),random(60,300),10,15);
		score = score + 1; 
	}

	if(snakehead.displace(food)){
		food = createSprite(random(180,400),random(60,300),10,15);


	}
	console.log(score);




	drawSprites();
}
>>>>>>> origin/master
