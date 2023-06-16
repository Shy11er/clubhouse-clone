import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserInfoProps } from "../../utils/types";

import Avatar from "./Avatar";
import Button from "./Button";

const UserInfo: React.FC<UserInfoProps> = ({
  fullName,
  userName,
  avatarUrl,
  about,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Avatar
          fullName={fullName || userName}
          isUserAvatar={false}
          imageUrl={avatarUrl}
        />
        <div className="flex flex-col mx-6">
          <h1 className="text-2xl font-bold leading-12">{fullName}</h1>
          <p className="text-xl">{`@${userName.toLowerCase()}`}</p>
        </div>
        <Button
          clsName="py-1 px-6 text-xl bg-transparent border-2 border-[#4e72c6] text-[#4e72c6] rounded-3xl"
          title="Follow"
        />
        <BsThreeDotsVertical className="mx-2 text-xl cursor-pointer" />
      </div>
      <div className="w-full h-full flex flex-col py-4">
        <p className="text-xl font-medium my-3 md:text-2xl">{about}</p>
        {/* <p className="text-base text-gray-800 font-regular md:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          magnam dolores amet pariatur ea corporis repellendus aut illum,
          incidunt, quidem deserunt, assumenda veritatis aliquid asperiores
          autem molestiae soluta voluptates molestias eos dignissimos.
        </p> */}
      </div>
    </div>
  );
};

export default UserInfo;
