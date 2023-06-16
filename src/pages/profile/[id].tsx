import React from "react";
import Link from "next/link";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { AiOutlineArrowLeft } from "react-icons/ai";
import NavBar from "@/components/NavBar";
import UserInfo from "@/components/UserInfo";
import { Api } from "../../../api";
import { ProfileProps } from "../../../utils/types";

const Profile: React.FC<ProfileProps> = ({ user }) => {
  console.log(user);
  return (
    <div className="h-full w-full">
      <NavBar user={user} />
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
            avatarUrl={user?.avatarUrl}
            userName={user?.username}
            fullName={user?.fullname}
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

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const user = await Api(ctx).getMe();

    if (user) {
      return {
        props: {
          user: user,
        },
      };
    }

    return {
      props: {
        redirect: {
          destination: "/",
          permanent: false,
        },
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        user: [],
        redirect: {
          destination: "/rooms",
          permanent: false,
        },
      },
    };
  }
};

export default Profile;
