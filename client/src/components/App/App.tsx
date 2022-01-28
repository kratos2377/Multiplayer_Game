import "./App.css";
import Board from "../Board";
import TurnDisplay from "../TurnDisplay";
import CheckDisplay from "../CheckDisplay";
import { useState } from "react";

const App = (props: any) => {
  const [currentTurn, setCurrentTurn] = useState("1");
  const [isBlackTurn, setIsBlackTurn] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="App">
      <TurnDisplay
        currentTurn={currentTurn}
        isBlackTurn={isBlackTurn}
        playerVal={props.playerVal}
      ></TurnDisplay>
      <CheckDisplay isCheck={isCheck}></CheckDisplay>
      <Board
        isBlackTurn={isBlackTurn}
        setTurn={setIsBlackTurn}
        isCheck={isCheck}
        setCheck={setIsCheck}
        roomId={props.roomId}
        playerVal={props.playerVal}
        currentTurn={currentTurn}
        setCurrentTurn={setCurrentTurn}
      ></Board>
    </div>
  );
};

export default App;
