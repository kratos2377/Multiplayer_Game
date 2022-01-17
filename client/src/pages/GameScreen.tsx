import React from "react";
import { socket } from "../services/socket.js";
import Sketch from "react-p5";
import p5Types from "p5";
import backdrop from "../Game-Components/Backdrop";
import Paddle from "../Game-Components/Paddle.js";
import Ball from "../Game-Components/Ball.js";
interface GameScreenProps {}

export const GameScreen: React.FC<GameScreenProps> = ({}) => {
  let x = 50;
  let y = 50;
  let textOffsetX = 50;
  let textOffsetY = 10;

  let width = window.innerWidth * 0.8;
  let height = window.innerHeight * 0.9;

  let p1: Paddle;
  let p2: Paddle;

  let ball: Ball;

  // function keyTyped() {
  //   if (key == ' ') {
  //     go = true;
  //   }

  //   if (key == 'r') {
  //     p1.score = 0;
  //     p2.score = 0;
  //     ball.resetball();
  //     go = false;
  //   }

  //   // for safety
  //   return false;
  // }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.9).parent(
      canvasParentRef
    );
    ball = new Ball(width / 2, height / 2, 10, 10, p5);
    p1 = new Paddle(20, height / 2 - 50, 10, 100, p5);
    p2 = new Paddle(width - 30, height / 2 - 50, 10, 100, p5);
  };

  const draw = (p5: p5Types) => {
    p5.background(52);
    movePaddles(p5);
    backdrop(p5);
    p1.show(p5);
    p2.show(p5);

    // let oob = ball.outOfBounds();
    // if (oob) {
    //   // the ball stays at spawn till go = true
    //   go = false;
    //   if (oob == 'right') {
    //     p1.score++;
    //   } else {
    //     p2.score++
    //   }
    // }

    // if (go) ball.update();

    ball.hit(p1, p2, p5, ball);

    ball.show(p5);
  };

  function movePaddles(p5: p5Types) {
    // 65 = 'a'
    if (p5.keyIsDown(65)) {
      p1.move(-5);
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

  return <Sketch setup={setup} draw={draw} />;
};
