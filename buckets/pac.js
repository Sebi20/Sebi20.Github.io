var coins;
var score = 0;
var Pac;
var PacImg;
function preload() {
  PacImg = loadImage('http://vignette3.wikia.nocookie.net/backyardmonsters/images/a/a1/Pacman-moving.gif/revision/latest?cb=20120607091206');
}
function setup() {
  createCanvas(400, 400);
  coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);
}
function draw() {
  background(50);
  Pac.velocity.x = 
    (mouseX-player.position.x)*0.1;
  Pac.velocity.y = 
    (mouseY-player.position.y)*0.1;
  Pac.overlap(coins, getCoin);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}