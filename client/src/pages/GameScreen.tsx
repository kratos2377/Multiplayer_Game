import React from "react";
import { socket } from "../services/socket.js";
import "../App.css";
import Sketch from "react-p5";
import * as p5Com from "p5";
import p5Types from "p5";
import backdrop from "../Game-Components/Backdrop";
import Paddle from "../Game-Components/Paddle.js";
import Ball from "../Game-Components/Ball.js";
interface GameScreenProps {
  isAdmin: boolean;
}

export const GameScreen: React.FC<GameScreenProps> = ({ isAdmin }) => {
  let go = false;
  let width = 950;
  let height = 500;
  let playerValue = isAdmin ? 1 : 2;

  let p1: Paddle;
  let p2: Paddle;

  let ball: Ball;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    ball = new Ball(width / 2, height / 2, 10, 10, p5, p5Com);
    p1 = new Paddle(20, height / 2 - 50, 10, 100, p5);
    p2 = new Paddle(width - 30, height / 2 - 50, 10, 100, p5);
  };

  const draw = (p5: p5Types) => {
    p5.background(52);
    movePaddles(p5);
    backdrop(p5, p1.score, p2.score);
    p1.show(p5, { r: 255, g: 0, b: 0 });
    p2.show(p5, { r: 255, g: 255, b: 255 });

    go = false;

    let oob = ball.outOfBounds(p5Com);
    if (oob) {
      // the ball stays at spawn till go = true
      go = false;
      if (oob === "right") {
        p1.score++;
      } else {
        p2.score++;
      }

      setTimeout(() => {
        go = true;
      }, 1500);
    }

    if (go) ball.update();
    // ball.update();
    ball.hit(p1, p2, p5, ball, p5Com);

    ball.show(p5);
  };

  function movePaddles(p5: p5Types) {
    // 65 = 'a'
    if (p5.keyIsDown(65)) {
      p1.move(-5);
      // socket.emit("player-movement")
    }

    // 90 = 'z'
    if (p5.keyIsDown(90)) {
      p1.move(5);
    }

    // 75 = 'k'
    if (p5.keyIsDown(75)) {
      p2.move(-5);
    }

    // 77 = 'm'
    if (p5.keyIsDown(77)) {
      p2.move(5);
    }
  }

  return (
    <div className="vertical-center">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};
