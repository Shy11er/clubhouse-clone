import { UserData } from "@/redux/slice/main";
import { Axios } from "../core/axios";

export const UserApi = {
  getMe: async (): Promise<UserData> => {
    const { data } = await Axios.get("/auth/me");
    return data;
  },
};
