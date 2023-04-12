import React from "react";
import Image from "next/image";
import { GiRotaryPhone } from "react-icons/gi";
import logo from "../../../public/assets/no-avatar.jpg";

function PhoneStep() {
  const [phoneNum, setPhoneNum] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

  // const formatNumber = (number: string) => {
  //   if (number.length < 5) return number;
  //   if (number.length < 8)
  //     return `${number[0]}(${number.slice(1, 4)})${number.slice(4)}`;
  //   if (number.length < 10)
  //     return `${number[0]}(${number.slice(1, 4)})${number.slice(
  //       4,
  //       7
  //     )}-${number.slice(7, 9)}`;
  //   else
  //     return `${number[0]}(${number.slice(1, 4)})${number.slice(
  //       4,
  //       7
  //     )}-${number.slice(7, 9)}-${number.slice(9)}`;
  // };

  const onNumberChange = (inputValue: string) => {
    // const formattedNumber: string = formatNumber(inputValue);
    setPhoneNum(inputValue);
    if (inputValue.length === 11) setIsDisabled(false);
    else setIsDisabled(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* <GiRotaryPhone className="w-20 h-20 fill-[#1DA1F2] text-red" /> */}
      <p className="text-4xl mb-2">☎️</p>
      {/* <Image src={logo} width="20" height="20" alt='logo'/> */}
      <div className="flex flex-col text-center mb-8 items-center mx-4">
        <h1 className="text-xl font-bold">Enter your phone #</h1>
        <p>We will send you a confirmation code</p>
      </div>
      <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
        <div className="mb-12 flex items-center flex-col mx-12">
          <input
            type="phone"
            value={phoneNum}
            className="px-4 py-2 border rounded-2xl mb-6 placeholder:text-gray-400"
            placeholder="+7 (999) 999-12-33"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(e) => onNumberChange(e.target.value)}
          />
        </div>
        <button
          disabled={isDisabled}
          onClick={() => console.log("first")}
          className={
            isDisabled
              ? "disabled px-4 py-2"
              : "rounded-xl bg-[#1DA1F2] px-4 py-2 text-gray-100 font-bold text-lg flex items-center hover:drop-shadow-md hover:shadow-indigo-700"
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PhoneStep;
