class Ball {
  constructor(x, y, r, speed = 10, p5, p5Com) {
    this.spawn = p5.createVector(x, y);
    this.speed = speed;
    this.r = r;
    this.resetball(p5Com);
  }

  resetball(p5) {
    console.log("Resetting");
    this.pos = this.spawn.copy();
    let angle = Math.random(-Math.PI / 4, Math.PI / 4);

    this.vel = p5.Vector.fromAngle(angle, this.speed);
    console.log(this.pos);
    if (Math.random(1) > 0.5) this.vel.x *= -1;
  }

  outOfBounds(p5Com) {
    let width = window.innerWidth * 0.8;
    let height = window.innerHeight * 0.9;
    if (this.pos.x > width + this.r) {
      this.resetball(p5Com);
      return "right";
    }

    if (this.pos.x < -this.r) {
      this.resetball(p5Com);
      return "left";
    }

    return false;
  }

  hit(p1, p2, p5, ball, p5Com) {
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
            this.vel = p5Com.Vector.fromAngle(a / 2, 10);
          } else {
            this.vel.rotate(Math.PI);
            let a = this.vel.heading();
            this.vel = p5Com.Vector.fromAngle(Math.PI + a / 2, 10);
          }
        }
      }
    }
  }

  update() {
    // console.log("Velocity");
    // console.log(this.vel);
    // console.log("Initial Pos");
    // console.log(this.pos);
    // this.pos.add(this.vel);
    // console.log("Position");
    // console.log(this.pos);

    let height = window.innerHeight * 0.9;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.pos.z += this.vel.z;

    // bounce off top and bottom walls
    if (this.pos.y + this.r >= height || this.pos.y - this.r <= 0) {
      if (this.pos.y < this.r) {
        this.pos.y = this.r;
      }

      if (this.pos.y > height - this.r) {
        this.pos.y = height - this.r;
      }
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
