var s;
var food;

var scl = 15;
var frame = 20;
var score = 0;

function setup(){
  frameRate(frame);
  createCanvas(600,600);
  s = new Snake();
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw(){
  background(51);
  text("Score: " + score, 10, 10, 70, 80);
  s.update();
  s.show();
  s.death();

  if(s.eat(food)) {
    pickLocation();
  }

  fill(255,0,100);
  rect(food.x, food.y, this.scl, this.scl);
}

function keyPressed() {
  if(keyCode === UP_ARROW && s.yspeed != 1) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed != -1) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW && s.xspeed != 1) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW && s.xspeed != -1) {
    s.dir(1, 0);
  }
}
