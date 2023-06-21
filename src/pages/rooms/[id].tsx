import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import io, { Socket } from "socket.io-client";
import Link from "next/link";
import { GetServerSideProps } from "next";

import NavBar from "@/components/NavBar";
import { Api } from "../../../api";
import { RoomApi } from "../../../api/RoomApi";
import Button from "@/components/Button";
import { Axios } from "../../../core/axios";
import { UserData, UserRoomProps } from "../../../utils/types";
import Avatar from "@/components/Avatar";
import { useRouter } from "next/router";
import { useSocket } from "../../../hooks/useSocket";

type SpeakersType = {
  fullname: string;
  avatarUrl: string;
};

const Speakers: React.FC<SpeakersType> = ({ fullname, avatarUrl }) => {
  return (
    <div className="flex flex-col h-fit text-center items-center w-fit m-2">
      <Avatar fullName={fullname} isUserAvatar imageUrl={avatarUrl} />
      <h1 className="text-xl w-1/2">{fullname}</h1>
    </div>
  );
};

const UserRoom: React.FC<UserRoomProps> = ({ room, user }) => {
  const [users, setUsers] = React.useState<UserData[]>([]);
  const router = useRouter();
  const socket = useSocket();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      socket.emit("client@rooms:join", {
        user,
        roomId: router.query.id,
      });

      socket.on("server@rooms:leave", (user: UserData) => {
        setUsers((prev) => prev.filter((obj) => obj.id !== user.id));
      });

      socket.on("server@rooms:join", (allUsers) => {
        console.log(allUsers);
        setUsers(allUsers);
      });

      setUsers((prev) => [...prev, user]);
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  const onExit = async () => {
    try {
      const roomId = room.id;
      await RoomApi(Axios).deleteRoom(roomId);
    } catch (error) {
      alert("Failed to remove room");
    }
  };

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
          <div className="h-1/4 w-full"></div>
          <div className="h-1/2 w-full flex flex-wrap flex-start">
            {users.map((obj, index) => (
              <Speakers key={index} {...obj} />
            ))}
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
