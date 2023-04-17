import React from "react";
import Image from "next/image";

type Props = {
  fullName: string;
  imageUrl?: string;
  isUserAvatar: boolean;
};


const Avatar: React.FC<Props> = ({ fullName, imageUrl, isUserAvatar }) => {
  const spl = fullName
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  if (isUserAvatar) {
    return (
      <>
      {imageUrl ? (
        <Image src={imageUrl} alt="logo"/>
      ) : (
        <div
          className={`w-12 h-12 rounded-xl border-2 border-slate-300 bg-gray-200 text-4xl flex justify-center items-center font-medium`}
        >
          <h1>{spl}</h1>
        </div>
      )}
    </>
    )
  }

  return (
    <>
      {imageUrl ? (
        <Image src={imageUrl} alt="logo"/>
      ) : (
        <div
          className={`w-24 h-24 rounded-xl border-2 border-slate-300 mb-4 bg-gray-200 text-4xl flex justify-center items-center font-medium`}
        >
          <h1>{spl}</h1>
        </div>
      )}
    </>
  );
};

export default Avatar;