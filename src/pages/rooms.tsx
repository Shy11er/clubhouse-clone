import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
// import Conversation from "@/components/Conversation";
import { CheckAuth } from "../../utils/checkAuth";
import { StartModalWindow } from "@/components/StartModalWindow";
import { Api } from "../../api";
import RoomCard from "@/components/RoomCard";
import { Room, UserData } from "../../utils/types";

type RoomPageProps = {
  rooms: Room[];
  user: UserData;
};

const RoomPage: NextPage<RoomPageProps> = ({ rooms, user }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      {isVisible && <StartModalWindow onClose={() => setIsVisible(false)} />}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clubhouse</title>
      </Head>
      <div className="h-full w-full">
        <NavBar user={user} />
        <div className="w-full h-auto text-3xl mt-8 px-20 flex justify-between">
          <h1>All conversations</h1>
          <Button onClick={() => setIsVisible(true)} title="+Start room" />
        </div>
        <div className="w-full h-fit px-20 rounded-3xl mt-8 grid grid-cols-4 gap-y-4 gap-x-2">
          {/* // <Conversation rooms={rooms} /> */}
          {rooms.map((obj) => (
            // <>
            <Link key={obj.id} legacyBehavior href={`/rooms/${obj.id}`}>
              <a className="h-min w-min">
                <RoomCard
                  title={obj.title}
                  speakers={obj.speakers}
                  listenersCount={obj.listenersCount}
                  avatars={[""]}
                />
              </a>
            </Link>
            // </>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const user = await CheckAuth(ctx);

    if (!user) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
        props: {},
      };
    }

    // const allrooms = Api(ctx).getAllRooms();
    // const rooms = allrooms.json();
    const rooms = await Api(ctx).getAllRooms();

    return {
      props: {
        rooms,
        user: user.data,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        rooms: [],
        user: null,
      },
    };
  }
};

export default RoomPage;
