import React from "react";
import { socket } from "../services/socket.js";
import "../App.css";

interface GameScreenProps {
  isAdmin: boolean;
  roomCode: string;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  isAdmin,
  roomCode,
}) => {
  return (
    <div className="board">
      <div id="mainChess" className="boardDi">
        <div id="dbody" className="dbodyDi">
          <div id="black">
            <div id="blackPlayer">
              <h1 id="ub">BLACK</h1>
            </div>

            <div id="livePB">
              <img id="eb1" alt="eblack" className="LI" src="eblack2.png" />
              <img id="hb1" alt="hblack" className="LI" src="hblack2.png" />
              <img id="cb1" alt="cblack" className="LI" src="cblack2.png" />
              <img id="kb1" alt="kblack" className="LI" src="kblack2.png" />
              <img id="eb2" alt="eblack" className="LI" src="eblack2.png" />
              <img id="hb2" alt="hblack" className="LI" src="hblack2.png" />
              <img id="cb2" alt="cblack" className="LI" src="cblack2.png" />
              <img id="qb1" alt="qblack" className="LI" src="qblack2.png" />
              <img id="sb1" alt="sblack" className="LI" src="sblack2.png" />
              <img id="sb2" alt="sblack" className="LI" src="sblack2.png" />
              <img id="sb3" alt="sblack" className="LI" src="sblack2.png" />
              <img id="sb4" alt="sblack" className="LI" src="sblack2.png" />
              <img id="sb5" alt="sblack" className="LI" src="sblack2.png" />
              <img id="sb6" alt="sblack" className="LI" src="sblack2.png" />
              <img id="sb7" alt="sblack" className="LI" src="sblack2.png" />
              <img id="sb8" alt="sblack" className="LI" src="sblack2.png" />
            </div>
          </div>

          <div className="mainDiv">
            <div className="boardDiv">
              <img id="board" alt="board" src="chessBoard.jpg" />
            </div>

            <div id="overBoard">
              <div id="mainP">
                <div id="11" className="P">
                  <img className="PP e" src="eblack2.png" />
                </div>
                <div id="12" className="P">
                  <img className="PP h" src="hblack2.png" />
                </div>
                <div id="13" className="P">
                  <img className="PP c" src="cblack2.png" />
                </div>
                <div id="14" className="P">
                  <img className="PP q" src="qblack2.png" />
                </div>
                <div id="15" className="P">
                  <img className="PP k" src="kblack2.png" />
                </div>
                <div id="16" className="P">
                  <img className="PP c" src="cblack2.png" />
                </div>
                <div id="17" className="P">
                  <img className="PP h" src="hblack2.png" />
                </div>
                <div id="18" className="P">
                  <img className="PP e" src="eblack2.png" />
                </div>

                <div id="21" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>
                <div id="22" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>
                <div id="23" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>
                <div id="24" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>
                <div id="25" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>
                <div id="26" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>
                <div id="27" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>
                <div id="28" className="P">
                  <img className="PP bs" src="sblack2.png" />
                </div>

                <div id="31" className="P">
                  <img className="PP n" />
                </div>
                <div id="32" className="P">
                  <img className="PP n" />
                </div>
                <div id="33" className="P">
                  <img className="PP n" alt="swhite" />
                </div>
                <div id="34" className="P">
                  <img className="PP n" />
                </div>
                <div id="35" className="P">
                  <img className="PP n" />
                </div>
                <div id="36" className="P">
                  <img className="PP n" />
                </div>
                <div id="37" className="P">
                  <img className="PP n" />
                </div>
                <div id="38" className="P">
                  <img className="PP n" />
                </div>

                <div id="41" className="P">
                  <img className="PP n" />
                </div>
                <div id="42" className="P">
                  <img className="PP n" />
                </div>
                <div id="43" className="P">
                  <img className="PP n" />
                </div>
                <div id="44" className="P">
                  <img className="PP n" />
                </div>
                <div id="45" className="P">
                  <img className="PP n" />
                </div>
                <div id="46" className="P">
                  <img className="PP n" />
                </div>
                <div id="47" className="P">
                  <img className="PP n" />
                </div>
                <div id="48" className="P">
                  <img className="PP n" />
                </div>

                <div id="51" className="P">
                  <img className="PP n" />
                </div>
                <div id="52" className="P">
                  <img className="PP n" />
                </div>
                <div id="53" className="P">
                  <img className="PP n" />
                </div>
                <div id="54" className="P">
                  <img className="PP n" />
                </div>
                <div id="55" className="P">
                  <img className="PP n" />
                </div>
                <div id="56" className="P">
                  <img className="PP n" />
                </div>
                <div id="57" className="P">
                  <img className="PP n" />
                </div>
                <div id="58" className="P">
                  <img className="PP n" />
                </div>

                <div id="61" className="P">
                  <img className="PP n" />
                </div>
                <div id="62" className="P">
                  <img className="PP n" />
                </div>
                <div id="63" className="P">
                  <img className="PP n" />
                </div>
                <div id="64" className="P">
                  <img className="PP n" />
                </div>
                <div id="65" className="P">
                  <img className="PP n" />
                </div>
                <div id="66" className="P">
                  <img className="PP n" />
                </div>
                <div id="67" className="P">
                  <img className="PP n" />
                </div>
                <div id="68" className="P">
                  <img className="PP n" />
                </div>

                <div id="71" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>
                <div id="72" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>
                <div id="73" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>
                <div id="74" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>
                <div id="75" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>
                <div id="76" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>
                <div id="77" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>
                <div id="78" className="P">
                  <img className="PP ws" alt="swhite" src="swhite2.png" />
                </div>

                <div id="81" className="P">
                  <img className="PP e" alt="swhite" src="ewhite2.png" />
                </div>
                <div id="82" className="P">
                  <img className="PP h" alt="swhite" src="hwhite2.png" />
                </div>
                <div id="83" className="P">
                  <img className="PP c" alt="swhite" src="cwhite2.png" />
                </div>
                <div id="84" className="P">
                  <img className="PP k" alt="swhite" src="kwhite2.png" />
                </div>
                <div id="85" className="P">
                  <img className="PP q" alt="swhite" src="qwhite2.png" />
                </div>
                <div id="86" className="P">
                  <img className="PP c" alt="swhite" src="cwhite2.png" />
                </div>
                <div id="87" className="P">
                  <img className="PP h" alt="swhite" src="hwhite2.png" />
                </div>
                <div id="88" className="P">
                  <img className="PP e" alt="swhite" src="ewhite2.png" />
                </div>
              </div>
            </div>
          </div>

          <div id="white">
            <div id="whitePlayer">
              <h1 id="uw">WHITE</h1>
            </div>

            <div id="livePW">
              <img id="ew1" alt="ewhite" className="LI" src="ewhite2.png" />
              <img id="hw1" alt="hwhite" className="LI" src="hwhite2.png" />
              <img id="cw1" alt="cwhite" className="LI" src="cwhite2.png" />
              <img id="kw1" alt="kwhite" className="LI" src="kwhite2.png" />
              <img id="ew2" alt="ewhite" className="LI" src="ewhite2.png" />
              <img id="hw2" alt="hwhite" className="LI" src="hwhite2.png" />
              <img id="cw2" alt="cwhite" className="LI" src="cwhite2.png" />
              <img id="qw1" alt="qwhite" className="LI" src="qwhite2.png" />
              <img id="sw1" alt="swhite" className="LI" src="swhite2.png" />
              <img id="sw2" alt="swhite" className="LI" src="swhite2.png" />
              <img id="sw3" alt="swhite" className="LI" src="swhite2.png" />
              <img id="sw4" alt="swhite" className="LI" src="swhite2.png" />
              <img id="sw5" alt="swhite" className="LI" src="swhite2.png" />
              <img id="sw6" alt="swhite" className="LI" src="swhite2.png" />
              <img id="sw7" alt="swhite" className="LI" src="swhite2.png" />
              <img id="sw8" alt="swhite" className="LI" src="swhite2.png" />
            </div>
          </div>
        </div>
        <div id="mainTime">
          <h1>
            <div id="time">0</div>
          </h1>
          <h1>
            <div>---</div>
          </h1>
          <h1>
            <div id="player">white</div>
          </h1>
        </div>
      </div>

      {/* <div id="chessChat">
        <div id="chats">
          <ul id="msgList"></ul>
        </div>
        <div id="newMsg">
          <div className="chatPlace">
            <input
              id="sendTxt"
              type="text"
              name="newMsg"
              className="sendTxt"
              placeholder="chat with the opponent"
            />
            <input
              id="sendBtn"
              type="button"
              name="send"
              value="send"
              className="sendBtn"
            />
          </div>
        </div>
      </div>

      <div id="videoChat">
        <iframe
          title="Video Chat"
          id="vchat"
          src=""
          className="videoChatDi"
          allow="microphone; camera"
        ></iframe>
      </div> */}
    </div>
  );
};
