var paddle, ball;
var MAX_SPEED=10;
var boundry1
var boundry2
var boundry3
var boundry4

function setup(){
	createCanvas(400,400);
	textAlign(CENTER, CENTER);
//framerate(7)
 paddle = createSprite(width/2,height-50,100,10);
 ball = createSprite(width/2, height/2, 10, 10);
  ball.maxSpeed = MAX_SPEED;
 ball.velocity.y=10
 ball.velocity.x=20
boundry1=createSprite(width/1,height-400,1500,1);	
boundry2=createSprite(width/5,height-1,1500,1);
boundry3=createSprite(width-1, height/2, 1, 1000);
boundry4=createSprite(1, height/2, 1, 1000);

}

function draw(){
	background(0);
	drawSprites();
	paddle.position.x= mouseX
if(ball.overlap(paddle)){
	ball.setVelocity(ball.velocity.x,-ball.velocity.y);

	}
if(ball.overlap(boundry1)){
	ball.setVelocity(ball.velocity.x,-ball.velocity.y);
	} 
if(ball.overlap(boundry2)){
	ball.setVelocity(0,0);
	
	}
if(ball.overlap(boundry3)){
	ball.setVelocity(-ball.velocity.x,ball.velocity.y);
	}
if(ball.overlap(boundry4)){
	ball.setVelocity(-ball.velocity.x,ball.velocity.y);
	}





 



 drawSprites();

 }


















	
