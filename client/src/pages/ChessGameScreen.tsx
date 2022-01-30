import React from "react";
import { useParams, useLocation } from "react-router-dom";
import App from "../game-components/App";
import { VideoCall } from "../Video-Screen/VideoCall";
import { Chat } from "../Chat-Screen/Chat";
import "./board.css";

interface GameScreenRoomIdProps {
  roomId: string;
}

interface ChessGameScreenProps {}

export const ChessGameScreen: React.FC<ChessGameScreenProps> = ({}) => {
  const { roomId } = useParams<GameScreenRoomIdProps>();
  const location =
    useLocation<{ username: "value"; playerVal: "value"; users: "value" }>();

  console.log(location.state);

  return (
    <div className="game-screen">
      <div className="chessBoard">
        <App
          playerVal={location.state.playerVal}
          username={location.state.username}
          roomId={roomId}
          users={location.state.users}
        />
      </div>
      <div className="videoArea">
        <VideoCall
          roomId={roomId}
          allUsers={location.state.users}
          username={location.state.username}
        />
      </div>
      <div>
        <Chat username={location.state.username} roomId={roomId} />
      </div>
    </div>
  );
};
