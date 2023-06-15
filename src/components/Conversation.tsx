import Link from "next/link";
import React from "react";

import RoomCard from "./RoomCard";

type Props = {
  rooms: any[];
};

const Conversation: React.FC<Props> = ({ rooms }) => {
  return (
    <div className="w-full rounded-3xl mt-8 grid grid-cols-4 gap-y-4 gap-x-2">
      {rooms.map((obj, index) => (
        <>
          <Link legacyBehavior href={`/rooms/${index}`}>
            <a className="h-min w-min">
              <RoomCard
                title="Why so serious?"
                memberAmount={86}
                memberList={["1", "2", "3"]}
                commentAmount={4}
                key={index}
              />
            </a>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Conversation;
