import io from "socket.io-client";

export const socket = io("https://glacial-inlet-65738.herokuapp.com", {
  transports: ["websocket", "polling", "flashsocket"],
  reconnection: true,
  secure: true,
});
