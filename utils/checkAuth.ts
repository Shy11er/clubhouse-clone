import { UserData } from "@/redux/slice/main";
import { GetServerSidePropsContext } from "next";
import Cookies from "nookies";
import { UserApi } from "../api/UserApi";
import { Axios } from "../core/axios";

export const CheckAuth = async (
  ctx: GetServerSidePropsContext
): Promise<UserData | null> => {
  try {
    const cookies = Cookies.get(ctx);

    if (cookies.token) {
      Axios.defaults.headers.Authorization = "Bearer " + cookies.token;
    }
    
    return await UserApi.getMe();
  } catch (error) {
    return null;
  }
};
