import React from "react";
import { Socket, io } from "socket.io-client";

export const useSocket = () => {
  const socketRef = React.useRef<Socket>();
  socketRef.current = io("http://localhost:3333");

  return socketRef.current;
};
