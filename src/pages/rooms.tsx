import React from "react";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Conversation from "@/components/Conversation";

type Props = {};

const Rooms: React.FC<Props> = ({}) => {
  return (
    <div className="h-full w-full">
      <NavBar />
      <div className="w-full h-auto text-3xl mt-8 px-20 flex justify-between">
        <h1>All conversations</h1>
        <Button title="+Start room" />
      </div>
      <div className="w-full px-10">
        <Conversation />
      </div>
    </div>
  );
};

export default Rooms;
