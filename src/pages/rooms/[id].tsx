import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import NavBar from "@/components/NavBar";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { Api } from "../../../api";
import { RoomApi } from "../../../api/RoomApi";
import Button from "@/components/Button";
import { Axios } from "../../../core/axios";
import { Room, UserData } from "../../../utils/types";

type Props = {
  room: Room;
  user: UserData;
};

const UserRoom: React.FC<Props> = ({ room, user }) => {
  const onExit = async () => {
    try {
      const roomId = room.id;
      await RoomApi(Axios).deleteRoom(roomId);
    } catch (error) {
      alert("Failed to remove room");
    }
  };
  console.log(user);

  return (
    <div className="h-full w-full ">
      <NavBar user={user} />
      <div className="w-full h-auto text-3xl mt-8 px-20 flex justify-between">
        <Link href="/rooms" legacyBehavior>
          <a className="flex flex-row items-center">
            <AiOutlineArrowLeft />
            <p>All rooms</p>
          </a>
        </Link>
      </div>
      <div className="h-full w-full px-20 py-10">
        <div className="w-full h-full rounded-xl bg-[#f4f4f0] p-10">
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-4xl">{room.title}</h1>
            <Link href="/rooms" legacyBehavior>
              <a>
                <Button
                  title="Leave quietly"
                  clsName="bg-red-400 text-white"
                  onClick={() => onExit()}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const user = await Api(ctx).getMe();

    if (!user) {
      return {
        props: {
          redirect: {
            destination: "/",
            permanent: false,
          },
        },
      };
    }

    const roomId = Number(ctx.query.id);
    const room = await Api(ctx).getRoom(roomId);
    return {
      props: {
        room,
        user: user,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        rooms: [],
        user: null,
        redirect: {
          destination: "/rooms",
          permanent: false,
        },
      },
    };
  }
};

export default UserRoom;
