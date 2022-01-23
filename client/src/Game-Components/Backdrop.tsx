import p5Types from "p5";

function backdrop(p5: p5Types, score1: number, score2: number) {
  let textOffsetX = 50;
  let textOffsetY = 10;
  let width = 950;
  let height = 500;

  p5.stroke(80);
  p5.strokeWeight(8);

  let dottedLength = 20;

  let y = dottedLength / 2;

  while (y < height) {
    p5.line(width / 2, y, width / 2, y + dottedLength);
    y += dottedLength * 2;
  }

  // p5.textFont(retroFont);
  p5.textSize(100);
  p5.noStroke();
  p5.fill(80);

  p5.textAlign(p5.RIGHT, p5.TOP);
  p5.text(score1, width / 2 - textOffsetX, textOffsetY);

  p5.textAlign(p5.LEFT);
  p5.text(score2, width / 2 + textOffsetX, textOffsetY);
}

export default backdrop;
