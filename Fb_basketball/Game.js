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
