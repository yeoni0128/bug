class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  display() {
    if(keyIsDown(UP_ARROW) && this.angle < 60){
      this.angle = this.angle - 1
      console.log(this.angle)
    }else if(keyIsDown(DOWN_ARROW) && this.angle > -27){
      this.angle = this.angle + 1
      console.log(this.angle)
    }
    
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base, 70, 20, 200, 200);
    noFill();

    
    
  }
}
