import React from "react";
import { useRouter } from "next/router";
import { TbNumbers } from "react-icons/tb";

import Button from "../Button";

import axios from "../../../core/axios";

const nul: number[] = [0, 1, 2, 3];

const PhoneActivate: React.FC = () => {
  const [codes, setCodes] = React.useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const route = useRouter();

  let codeNum = Number(codes.join(""));
  const disabled = codeNum >= 1000;

  const handleChangeInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const ind = Number(ev.target.getAttribute("id"));
    const value = ev.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[ind] = value;
      return newArr;
    });

    if (ev.target.nextSibling) {
      (ev.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSubm = async () => {
    setIsLoading(true);
    try {
      await axios.get("/todos");
      route.push("/rooms");
    } catch (e) {
      alert("Connection failed");
      console.error(e);
    }
    setIsLoading(false);
  };

  const cell = (v: any) => {
    return (
      <input
        type="text"
        id={v.toString()}
        key={v}
        placeholder="X"
        maxLength={1}
        value={codes[v]}
        onChange={handleChangeInput}
        className="m-2 text-2xl rounded-xl drop-shadow bg-gray-100 focus:outline-none w-12 h-16 text-center font-semibold text-gray-700"
      />
    );
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {!isLoading ? (
          <>
            <div className="flex p-2 bg-[#1DA1F2] rounded-2xl">
              <TbNumbers className="w-12 h-12 text-white" />
            </div>
            <div className="flex flex-col text-center mb-8 items-center mx-4">
              <h1 className="text-xl font-bold">Enter your activate code</h1>
            </div>
            <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-2 flex flex-col items-center text-center shadow-md">
              <div className="mb-12 flex items-center flex-row flex-wrap justify-center">
                {nul.map((el: number) => cell(el))}
              </div>
              <Button
                isDisabled={!disabled}
                title="Next"
                onClick={() => onSubm()}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-row relative">
            <h1 className="text-3xl">Loading</h1>
            <div className="lds-ellipsis absolute bottom-3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PhoneActivate;
