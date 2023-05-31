import React from "react";
import Image from "next/image";

import logo from "../../public/assets/ex.jpg";
import logo2 from "../../public/assets/ex2.jpg";

type Props = {
  fullName: string;
  imageUrl?: string;
  isUserAvatar: boolean;
};

const Avatar: React.FC<Props> = ({ fullName, imageUrl = "", isUserAvatar }) => {
  const spl = fullName
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  if (isUserAvatar) {
    imageUrl = "1";
    return (
      <>
        {imageUrl !== "" ? (
          <Image
            src={logo}
            width="24"
            height="24"
            alt="logo"
            className={"w-12 h-12 rounded-full"}
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-full border-2 border-slate-300 bg-gray-200 text-4xl flex justify-center items-center font-medium`}
          >
            <h1>{spl}</h1>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {imageUrl !== "" ? (
        <Image
          src={imageUrl}
          width="600"
          height="604"
          alt="logo"
          className="w-32 h-32 rounded-full border-2"
        />
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
