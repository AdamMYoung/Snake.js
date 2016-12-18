function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.size = [];

  this.update = function() {
    if (this.total === this.size.length) {
      for (var i = 0; i < this.size.length - 1; i++) {
        this.size[i] = this.size[i + 1];
      }
    }

    this.size[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.size.length; i++) {
      rect(this.size[i].x, this.size[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
    }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.size.length; i++) {
      var pos = this.size[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        score = 0;
        this.size = [];
      }
    }
  }

  this.eat = function(pos) {
    var distance = dist(this.x, this.y, pos.x, pos.y);
    if(distance < 1) {
      score = score + 10;
      this.total++;
      return true;
    }else{
      return false;
    }
  }
}
