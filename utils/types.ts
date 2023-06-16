export type UserData = {
  id?: number;
  fullname: string;
  avatarUrl: string;
  isActive: number;
  username: string;
  phone?: string;
  token?: string;
  step?: number;
};

export type UserInfoProps = {
  fullName: string;
  userName: string;
  avatarUrl?: string;
  about: string;
};

export type RoomCardProps = {
  title: string;
  avatars: string[];
  speakers: string[];
  listenersCount: number;
};

export interface Room {
  id?: number;
  title?: string;
  speakers?: any[];
  listenersCount?: number;
}

export type ProfileProps = {
  user: UserData;
};
