import React from "react";

type Props = {
  onClick?: () => void;
  disabled?: boolean;
  clsName?: string;
  title: string;
};

const Button: React.FC<Props> = ({ onClick, disabled, clsName, title }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`tracking-wide px-4 h-12 ${
        clsName || "bg-green-500 text-white"
      } rounded-3xl text-xl hover:scale-105 ease-linear duration-75`}
    >
      {title}
    </button>
  );
};

export default Button;
