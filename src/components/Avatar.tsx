import React from "react";
type Props = {
  fullName: string;
  imageUrl?: string;
};

const defaultProps: Props = {
  fullName: "",
  imageUrl: "",
};

const Avatar: React.FC<Props> = ({ fullName, imageUrl }) => {
  const spl = fullName
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  return (
    <>
      {imageUrl ? (
        <img src={imageUrl} className="rounded-full w-28 h-28 bg-contain bg-center bg-no-repeat" />
      ) : (
        <div className="w-28 h-28 rounded-xl border mb-4 bg-gray-200 text-4xl flex justify-center items-center font-medium">
          <h1>{spl}</h1>
        </div>
      )}
    </>
  );
};

Avatar.defaultProps = defaultProps;
export default Avatar;
