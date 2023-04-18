import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

const Profile: React.FC = () => {
  const router = useRouter();
  const url = router.query;

  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="px-20 py-10 w-full h-full flex flex-col">
        <Link
          className="text-3xl font-semibold flex flex-row items-center mb-10"
          href="/"
        >
          <AiOutlineArrowLeft />
          <h1 className="mx-1">Back</h1>
        </Link>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <Avatar fullName="Daniel Brekker" isUserAvatar={false} />
            <div className="flex flex-col mx-6">
              <h1 className="text-2xl font-bold leading-12">Daniel Brekker</h1>
              <p className="text-xl">@brekker</p>
            </div>
            <Button
              clsName="py-1 px-6 text-xl bg-transparent border-2 border-[#1DA1F2] text-[#1DA1F2] rounded-3xl"
              title="Follow"
            />
            <BsThreeDotsVertical className="mx-2 text-xl cursor-pointer" />
          </div>
          <div className="bg-white flex flex-row rounded-2xl">
            <div className="p-4 flex flex-col text-center">
              <h1 className="text-3xl font-bold">2</h1>
              <p className="text-xl	text-gray-400">followers</p>
            </div>
            <div className="p-4 flex flex-col text-center">
              <h1 className="text-3xl font-bold">0</h1>
              <p className="text-xl	text-gray-400">following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
