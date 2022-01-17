class Ball {
  constructor(x, y, r, speed = 10, p5) {
    this.spawn = p5.createVector(x, y);
    this.speed = speed;
    this.r = r;
    this.resetball(p5);
  }

  resetball(p5) {
    this.pos = this.spawn.copy();
    let angle = Math.random(-Math.PI / 4, Math.PI / 4);

    this.vel = p5.Vector.fromAngle(angle, this.speed);
    if (Math.random(1) > 0.5) this.vel.x *= -1;
  }

  outOfBounds() {
    let width = window.innerWidth * 0.8;
    let height = window.innerHeight * 0.9;
    if (this.pos.x > width + this.r) {
      // this.resetball(p5);
      return "right";
    }

    if (this.pos.x < -this.r) {
      //   this.resetball();
      return "left";
    }

    return false;
  }

  hit(p1, p2, p5, ball) {
    for (let pad of [p1, p2]) {
      let padX = pad.pos.x;
      let padY = pad.pos.y;
      let ballX = ball.pos.x;
      let ballY = ball.pos.y;
      let r = this.r;

      // if ball collides on x-axis
      if (padX - r < ballX && ballX < padX + pad.w + r) {
        // and on y-axis
        if (padY - r < ballY && ballY < padY + pad.h + r) {
          // ball collided

          let padCenter = p5.createVector(
            pad.pos.x + pad.w / 2,
            pad.pos.y + pad.h / 2
          );

          // Vector from center of pad to center of ball
          this.vel = this.pos.copy().sub(padCenter);
          this.vel.limit(10);

          // basically halve that angle so it points more to the center
          let a = this.vel.heading();
          if (a > -Math.PI / 2 && a < Math.PI / 2) {
            this.vel = p5.Vector.fromAngle(a / 2, 10);
          } else {
            this.vel.rotate(Math.PI);
            let a = this.vel.heading();
            this.vel = p5.Vector.fromAngle(Math.PI + a / 2, 10);
          }
        }
      }
    }
  }

  update() {
    this.pos.add(this.vel);
    let width = window.innerWidth * 0.8;
    let height = window.innerHeight * 0.9;

    // bounce off top and bottom walls
    if (this.pos.y + this.r >= height || this.pos.y - this.r <= 0) {
      //   this.pos.y = constrain(this.pos.y, this.r, height - this.r);
      this.vel.y *= -1;
    }
  }

  show(p5) {
    p5.fill(255);
    p5.noStroke();
    p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

export default Ball;
