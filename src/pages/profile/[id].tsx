import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import UserInfo from "@/components/UserInfo";

const Profile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="px-20 py-10 w-full flex flex-col">
        <Link
          className="text-3xl font-semibold flex flex-row items-center mb-10"
          href="/rooms"
        >
          <AiOutlineArrowLeft />
          <h1 className="mx-1">Back</h1>
        </Link>
        <div className="flex flex-row justify-between items-start">
          <UserInfo
            userName="brekker"
            fullName="Daniel Brekker"
            about={"asdasf"}
          />
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
