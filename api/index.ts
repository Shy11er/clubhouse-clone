import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Cookies from "nookies";
import { UserApi } from "./UserApi";

export const Api = (ctx: GetServerSidePropsContext) => {
  const { token } = Cookies.get(ctx);

  const instance = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    ...UserApi(instance),
  };
};
