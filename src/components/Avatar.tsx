import React from "react";
type Props = {
  fullName: string;
};

const defaultProps: Props = {
  fullName: "",
};

export default function Avatar({ fullName }: Props) {
  const spl = fullName
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  return (
    <div className="w-16 h-16 rounded-xl border mb-4 bg-gray-200 text-3xl flex justify-center items-center font-medium">
      <h1>{spl}</h1>
    </div>
  );
}

Avatar.defaultProps = defaultProps;
