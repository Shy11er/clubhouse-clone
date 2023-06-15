import { AxiosInstance } from "axios";

export interface Room {
  title?: string;
  speakers?: any[];
  listenersCount?: number;
}

type RoomType = "open" | "social" | "closed";

export const RoomApi = (instance: AxiosInstance) => {
  return {
    getAllRooms: async (): Promise<Room> => {
      const { data } = await instance.get("/rooms");
      return  data;
    },
    getRoom: async (id: number): Promise<Room> => {
      const { data } = await instance.get(`/rooms/${id}`);
      return data;
    },
    createRoom: async (title: string, type: RoomType): Promise<Room> => {
      const { data } = await instance.post("/rooms/", { title, type });
      return data;
    },
    deleteRoom: async (id: number): Promise<void> =>
      instance.delete(`/rooms/${id}`),
  };
};
