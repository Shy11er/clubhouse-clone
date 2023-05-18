import React from "react";

import Room from "./Room";

const Conversation: React.FC = () => {
  return (
    <div className="w-full rounded-3xl mt-8 flex flex-wrap justify-start content-start items-start">
      {[...Array(9)].map((obj, index) => (
        <Room
          title="Why so serious?"
          memberAmount={86}
          memberList={["1", "2", "3"]}
          commentAmount={4}
          key={index}
        />
      ))}
    </div>
  );
};

export default Conversation;
