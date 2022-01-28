import React from "react";
import { useParams, useLocation } from "react-router-dom";
import App from "../components/App";
import "./board.css";

interface GameScreenRoomIdProps {
  roomId: string;
}

interface ChessGameScreenProps {}

export const ChessGameScreen: React.FC<ChessGameScreenProps> = ({}) => {
  const { roomId } = useParams<GameScreenRoomIdProps>();
  const location = useLocation<{ username: "value"; playerVal: "value" }>();

  console.log(location.state);

  return (
    <>
      <div className="chessBoard">
        <App />
      </div>
    </>
  );
};
