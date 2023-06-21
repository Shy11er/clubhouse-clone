import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";
import { RoomApi } from "../../api/RoomApi";
import { Axios } from "../../core/axios";
import { useAppDispatch, useAppSelector } from "../../hooks/UseStore";
import { useDispatch } from "react-redux";
import { roomSelector, setRooms, updateRoomSpeakers } from "@/redux/slice/room";
import { useSelector } from "react-redux";

type Props = {
  onClose: () => void;
};

type fetchType = {
  title: string;
  type: string;
};

const roomTypes = [
  ["open", "global.png"],
  ["social", "public.jpg"],
  ["closed", "lock.png"],
];

export const StartModalWindow: React.FC<Props> = ({ onClose }) => {
  const router = useRouter();
  const [isActive, setIsActive] = React.useState<number>(0);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(roomSelector);
  console.log(items);
  const onSubmit = async () => {
    try {
      // const room = await Axios.post("/rooms", form);
      const form: fetchType = {
        title: searchValue,
        type: roomTypes[isActive][0],
      };

      // if (!searchValue) {
      //   return alert("Enter room name");
      // }
      // const data = await dispatch(
      //   fetchCreateRoom({ title: form.title, type: form.type })
      // );
      // console.log(data.payload);
      const room = await RoomApi(Axios).createRoom(form);
      dispatch(setRooms(room));
      onClose();
      router.push(`/rooms/${room.id}`);
    } catch (error) {
      console.log(error);
      alert("Failed to create the room");
    }
  };

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,.8)] absolute z-50 flex justify-center items-center ">
      <AiOutlineClose
        onClick={onClose}
        className="absolute top-0 right-0 w-10 h-10 cursor-pointer hover:fill-gray-300 "
        fill="white"
      />
      <div className="w-[450px] h-[450px] rounded-lg bg-slate-100 p-8">
        <div className="w-full mb-4">
          <h1 className="text-2xl font-medium">Topic</h1>
          <input
            type="text"
            value={searchValue}
            onChange={(ev) => {
              setSearchValue(ev.target.value);
            }}
            className="w-full h-[60px] rounded-lg text-2xl border-none outline-none"
            placeholder="Enter the topic to dicussed"
          />
        </div>
        <div className="flex flex-row justify-around items-center">
          {roomTypes.map((obj, i) => (
            <div
              key={i}
              className="w-[100px] h-[120px] flex flex-col items-center text-center cursor-pointer"
              onClick={() => setIsActive(i)}
            >
              <div
                className={`rounded-3xl p-2 ${
                  isActive === i && "bg-gray-600"
                } h-[100px] w-[100px]`}
              >
                <Image
                  className="rounded-3xl object-cover w-full h-full"
                  src={require(`/public/assets/${obj[1]}`)}
                  alt="logo"
                />
              </div>
              <h1>{obj[0][0].toUpperCase() + obj[0].slice(1)}</h1>
            </div>
          ))}
        </div>
        <div className="h-1/2 flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl mt-4 mb-2">
            Start a room open to everyone
          </h1>
          <Button title="Let's go" onClick={onSubmit}></Button>
        </div>
      </div>
    </div>
  );
};
