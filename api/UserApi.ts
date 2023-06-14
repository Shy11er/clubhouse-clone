
import { UserData } from "@/redux/slice/main";
import { AxiosInstance } from "axios";


export const UserApi = (instance: AxiosInstance) => {
  return {
    getMe: async (): Promise<UserData> => {
      const { data } = await instance.get("/auth/me");
      return data;
    },
  };
};
