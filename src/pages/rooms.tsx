import React from "react";
import Head from "next/head";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Conversation from "@/components/Conversation";
import { CheckAuth } from "../../helpers/checkAuth";

export default function Rooms({ rooms = [] }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clubhouse</title>
      </Head>
      <div className="h-full w-full">
        <NavBar />
        <div className="w-full h-auto text-3xl mt-8 px-20 flex justify-between">
          <h1>All conversations</h1>
          <Button title="+Start room" />
        </div>
        <div className="w-full h-full px-20">
          <Conversation />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
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

    return {
      props: {
        user,
        rooms: [],
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        rooms: {},
      },
    };
  }
};
