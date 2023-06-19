import React from "react";
import Image from "next/image";

type Props = {
  fullName: string;
  imageUrl?: string;
  isUserAvatar: boolean;
  isVoice?: boolean;
};

const Avatar: React.FC<Props> = ({
  fullName = "",
  imageUrl = "",
  isUserAvatar,
  isVoice,
}) => {
  const spl = fullName &&fullName
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  if (isUserAvatar) {
    return (
      <div className={isVoice && "rounded-full h-fit border-4 border-black"}>
        {imageUrl !== "" ? (
          <Image
            src={imageUrl}
            width="24"
            height="24"
            alt="logo"
            className={`w-12 h-12 rounded-full ${
              isVoice ? " border-2 border-red" : ""
            }`}
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-full border-2 border-slate-300 bg-gray-200 text-4xl flex justify-center items-center font-medium`}
          >
            <h1>{spl}</h1>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={isVoice && "rounded-full h-fit border-4 border-black"}>
      {imageUrl !== "" ? (
        <Image
          src={imageUrl}
          width="600"
          height="600"
          alt="logo"
          className={`w-32 h-32 rounded-full border-2`}
        />
      ) : (
        <div
          className={`w-24 h-24 rounded-xl border-2 border-slate-300 mb-4 bg-gray-200 text-4xl flex justify-center items-center font-medium`}
        >
          <h1>{spl}</h1>
        </div>
      )}
    </div>
  );
};

export default Avatar;
