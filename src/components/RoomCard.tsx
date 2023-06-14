import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

import Avatar from "./Avatar";

type Props = {
  title: string;
  memberList: string[];
  memberAmount: number;
  commentAmount: number;
};

const members: string[] = ["ann", "casey", "jack"];

const RoomCard: React.FC<Props> = ({
  title,
  memberList,
  memberAmount,
  commentAmount,
}) => {
  return (
    <div className="shadowB w-80 h-48 bg-[#f4f4f0] flex flex-col justify-start pl-6 pr-12 py-6 rounded-3xl cursor-pointer hover:scale-105 ease-linear duration-75">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="w-full h-full flex flex-row">
        <div className="avatars flex flex-col justify-start relative w-[82px] h-[84px] mr-2 border-2 border-white-400 rounded-3xl">
          {memberList.map((obj, index) =>
            index < 2 ? (
              <>
                <div
                  key={index}
                  className={
                    "w-16 h-8 justify-evenly relative " +
                    (index == 1 ? "avatarChi" : "")
                  }
                >
                  <Avatar
                    isUserAvatar
                    //   imageUrl={obj}
                    fullName={obj}
                    key={index}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  key={index}
                  className="absolute w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center font-bold text-xl top-6 right-6 text-white"
                >{`+${index - 1}`}</div>
              </>
            )
          )}
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col">
            {members.map((obj, index) => (
              <>
                <h2 key={index} className="font-medium tracking-wide">
                  {obj}
                </h2>
              </>
            ))}
          </ul>
          <div className="flex flex-row mt-2 text-gray-500">
            <div className="flex flex-row items-center">
              {memberAmount}
              <FaUserAlt className="mx-1" />
            </div>
            <div className="flex flex-row items-center">
              {commentAmount}
              <BiCommentDetail className="mx-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
