import { AxiosInstance } from "axios";
import { UserData } from "../utils/types";

export const UserApi = (instance: AxiosInstance) => {
  return {
    getMe: async (): Promise<UserData> => {
      const { data } = await instance.get("/auth/me");
      return data.data;
    },
    register: async (user: {
      username: string;
      fullname: string;
      avatarUrl: string;
    }): Promise<UserData> => {
      const { data } = await instance.post("/auth/register", user);
      return data;
    },
  };
};
