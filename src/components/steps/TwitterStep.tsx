import React from "react";
import Avatar from "../Avatar";
import { AiOutlineTwitter } from "react-icons/ai";

type Props = {
  fullName: string;
};

const defaultProps: Props = {
  fullName: "Daniel Brekker",
};

export default function TwitterStep({ fullName }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col text-center mb-8 items-center mx-4">
        <AiOutlineTwitter className="w-14 h-14 fill-[#1DA1F2]" />
        <h1 className="text-xl font-bold">
          Do you want import info from Twitter?
        </h1>
      </div>
      <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
        <div className="mb-12 flex items-center flex-col mx-12">
          <Avatar fullName={fullName} />
          <h1 className="text-2xl font-medium">{fullName}</h1>
        </div>
        <button className="rounded-xl bg-[#1DA1F2] px-4 py-2 text-gray-100 font-bold text-lg flex items-center hover:drop-shadow-md hover:shadow-indigo-700">
          <AiOutlineTwitter
            style={{ fill: "white", marginRight: "4px", fontSize: "20px" }}
          />
          Import from Twitter
        </button>
      </div>
    </div>
  );
}

TwitterStep.defaultProps = defaultProps;