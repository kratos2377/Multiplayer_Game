class Paddle {
  constructor(x, y, w, h, p5) {
    this.pos = p5.createVector(x, y);
    this.w = w;
    this.h = h;
    this.score = 0;
  }

  move(amt, p5) {
    let height = window.innerHeight * 0.9;
    this.pos.y += amt;

    if (this.pos.y < 10) {
      this.pos.y = 10;
    }

    if (this.pos.y > height - 10 - this.h) {
      this.pos.y = height - 10 - this.h;
    }
  }

  show(p5, color) {
    p5.noStroke();
    p5.fill(color.r, color.g, color.b);
    p5.rect(this.pos.x, this.pos.y, this.w, this.h);
  }
}

export default Paddle;
