import "reflect-metadata";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import Express from "express";
import { createBuildSchema } from "./utils/createSchema";
import { ApolloServer } from "apollo-server-express";

import cors from "cors";
import { Lobby } from "./entity/Lobby";
import { Room } from "./entity/Room";
import { User } from "./entity/User";
import { Socket } from "socket.io";

interface ExtSocket extends Socket {
  username: string;
  x: number;
  y: number;
  roomCode: string;
  speed: number;
  score: number;
}

const main = async () => {
  dotenv.config();

  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    entities: [User, Lobby, Room],
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

  const app = Express();
  app.set("trust proxy", 1);

  const schema = await createBuildSchema();

  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://keen-leavitt-c423c3.netlify.app/",
      ],
      credentials: true,
    })
  );

  // app.use(
  //   session({
  //     store: new RedisStore({
  //       client: redis as any,
  //       disableTouch: true
  //     }),
  //     name: 'qid',
  //     secret: 'aslkdfjoiq12312',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       path: '/',
  //       httpOnly: true,
  //       secure: false,
  //       maxAge: 1000 * 60 * 60 * 24 * 90 // 90 Days
  //     }
  //   })
  // );

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
  });
  //await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  const port = process.env.PORT || 5000;
  const httpServer = app.listen(port, () =>
    console.log("SERVER STARTED AT PORT " + port)
  );
  const io = require("socket.io")(httpServer, {
    cors: {
      origin: [
        "https://localhost:3000",
        "https://keen-leavitt-c423c3.netlify.app/",
      ],
    },
  });
  // console.log("THIS IS IO");
  // console.log(io);
  let width = 950;
  let height = 500;
  io.on("connection", function (socket: ExtSocket) {
    // console.log(socket);
    socket.emit("setId", { id: socket.id });
    socket.on("init", function (data) {
      socket.score = 0;
      socket.x = data.playerValue == 1 ? 20 : width - 30;
      socket.y = height / 2 - 50;
      socket.username = data.username;
      socket.roomCode = data.roomCode;
    });

    socket.on("joinRoom", function (data) {
      socket.join(data.roomId);
      socket.broadcast.to(data.roomId).emit("someone-joined", {
        id: socket.id,
        username: socket.username,
        users: data.users,
      });
    });

    socket.on("leaveRoom", function (data) {
      socket.leave(data.roomId);
      socket.broadcast.to(data.roomId).emit("someone-leaved", {
        id: socket.id,
        username: socket.username,
        users: data.users,
      });
    });

    socket.on("throw-all-users-out-of-room", function (data) {
      socket.broadcast.to(data.roomId).emit("throw-room-recieved", {
        value: "THROW",
      });
    });

    socket.on("gameStart", function (data) {
      socket.score = 0;

      let value = Math.floor(Math.random() * (2 - 1 + 1) + 1);

      socket.broadcast.to(data.roomId).emit("ball-pos", {
        direction: value,
      });
    });

    // socket.on("stop-game" , {

    // })

    socket.on("update-score", function (data) {
      socket.score = data.score;
    });

    socket.on("update-position", function (data) {
      socket.x = data.x;
      socket.y = data.y;

      socket.broadcast.to(data.roomId).emit("player-position", {
        value: data.playerValue,
        x: data.x,
        y: data.y,
      });
    });

    // Ball Functions will control the flow of game

    socket.on("update-ball-pos", function (data) {
      socket.broadcast.to(data.roomId).emit("ball-position", {
        ballx: 0,
        bally: 0,
      });
    });

    // socket.on("ball-hit", function (data) {});

    // socket.on("out-of-bound", function (data) {});

    // socket.emit("ball-position");

    // socket.on("update" , function(data) {

    // });
  });
};

main().catch((err) => console.log(err));
