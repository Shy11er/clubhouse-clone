import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import NavBar from "@/components/NavBar";
import Link from "next/link";
import RoomPage from "@/components/RoomPage";

type Props = {};

const UserRoom: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="h-full w-full ">
      <NavBar />
      <div className="w-full h-auto text-3xl mt-8 px-20 flex justify-between">
        <Link href="/rooms" legacyBehavior>
          <a className="flex flex-row items-center">
            <AiOutlineArrowLeft />
            <p>All rooms</p>
          </a>
        </Link>
      </div>
      <div className="h-full w-full px-20 py-10">
        <RoomPage title="Why so serious?" />
      </div>
    </div>
  );
};

export default UserRoom;
