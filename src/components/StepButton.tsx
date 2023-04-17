import React, { ReactElement } from "react";

type Props = {
  isDisabled: boolean;
  title: string;
  img?: ReactElement;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ isDisabled, title, img, onClick }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={
        isDisabled
          ? "disabled px-4 py-2"
          : "rounded-xl bg-[#1DA1F2] px-4 py-2 text-gray-100 font-bold text-lg flex items-center hover:drop-shadow-md hover:shadow-indigo-700"
      }
    >
      {title}
      {img}
    </button>
  );
};

export default Button;
