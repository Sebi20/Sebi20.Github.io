var paddle, ball;
var MAX_SPEED=10;
var boundry1
var boundry2
var boundry3
var boundry4
function setup(){
	createCanvas(800,800);
//framerate(7)
 paddle = createSprite(width/2,height-50,100,10);
 ball = createSprite(width/2, height/2, 10, 10);
  ball.maxSpeed = MAX_SPEED;
 ball.velocity.y=20
 ball.velocity.x=20
boundry1=createSprite(width/5,height-700,1000,20)	
boundry2=createSprite(width/5,height-5,1500,20)
boundry3=createSprite(width/5,height/200,1000,20)
boundry4=createSprite(width/5,height/800,1000,20)
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
	//set.Text(GAME OVER);
	}
if(ball.overlap(boundry3)){
	ball.setVelocity(-ball.velocity.x,ball.velocity.y);
	}
if(ball.overlap(boundry4)){
	ball.setVelocity(-ball.velocity.x,ball.velocity.y);
	}

}




//function ballMove(){

//}




















//function keyPressed() {
//  if (keyCode == RIGHT_ARROW) {
 //   paddle .setSpeed(1.5, 0);
 // }
//  else if (keyCode == DOWN_ARROW) {
 //   paddle .setSpeed(1.5, 90);
 // }
  //else if (keyCode == LEFT_ARROW) {
  //  paddle .setSpeed(1.5, 180);
 // }
 // else if (keyCode == UP_ARROW) {
 //   paddle .setSpeed(1.5, 270);
  //}
 // else if (key == ' ') {
 //   paddle .setSpeed(4, 300);
 // }
 // return false;
//}



	
