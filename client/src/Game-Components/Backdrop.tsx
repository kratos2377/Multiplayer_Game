import p5Types from "p5";

function backdrop(p5: p5Types) {
  let textOffsetX = 50;
  let textOffsetY = 10;

  let width = window.innerWidth * 0.8;
  let height = window.innerHeight * 0.9;

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
  p5.text(0, width / 2 - textOffsetX, textOffsetY);

  p5.textAlign(p5.LEFT);
  p5.text(0, width / 2 + textOffsetX, textOffsetY);
}

export default backdrop;
