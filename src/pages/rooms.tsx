import React from "react";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";

type Props = {};

const Rooms: React.FC<Props> = ({}) => {
  return (
    <>
      <NavBar />
      <div className="w-full h-full text-3xl mt-8 px-20 flex justify-between">
        <h1>All conversations</h1>
        <Button title="+Start room" />
      </div>
    </>
  );
};

export default Rooms;
