import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Cookies from "nookies";
import { RoomApi } from "./RoomApi";
import { UserApi } from "./UserApi";

type ApiReturnType = ReturnType<typeof UserApi> & ReturnType<typeof RoomApi>;

export const Api = (ctx: GetServerSidePropsContext): ApiReturnType => {
  const { token } = Cookies.get(ctx);

  const instance = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    ...UserApi(instance),
    ...RoomApi(instance),
  };
};
