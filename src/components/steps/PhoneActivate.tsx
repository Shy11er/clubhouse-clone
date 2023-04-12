import React from "react";
import { TbNumbers } from "react-icons/tb";

type Props = {};

export default function PhoneActivate({}: Props) {
  const [inputCode, setInputCode] = React.useState("");

  const nul: number[] = [0, 1, 2, 3];

  const onChangeInput = (e: string) => {
    addEventListener("keyup", (ev) => {
      if (ev.key === "Backspace" || ev.key === "Delete") {
        setInputCode("");
      }
    });
    if (e.length === 1 && /^\d+$/.test(e)) setInputCode(e);
  };

  const cell = (v: any, k: number) => {
    return (
      <input
        type="text"
        key={k}
        value={inputCode}
        onChange={(e) => onChangeInput(e.target.value)}
        className="mx-2 text-2xl rounded-xl drop-shadow bg-gray-100 focus:outline-none w-12 h-16 text-center text-bold"
      />
    );
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex p-2 bg-[#1DA1F2] rounded-2xl">
          <TbNumbers className="w-12 h-12 text-white" />
        </div>
        <div className="flex flex-col text-center mb-8 items-center mx-4">
          <h1 className="text-xl font-bold">Enter your activate</h1>
        </div>
        <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-4 flex flex-col items-center text-center shadow-md">
          <div className="mb-12 flex items-center mx-12 flex-row flex-wrap">
            {nul.map((el: any, key: number) => cell(el, key))}
          </div>
          <button className="rounded-xl bg-[#1DA1F2] px-4 py-2 text-gray-100 font-bold text-lg flex items-center hover:drop-shadow-md hover:shadow-indigo-700">
            Next
          </button>
        </div>
      </div>
    </>
  );
}