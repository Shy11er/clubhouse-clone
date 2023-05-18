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
      className={
        clsName ||
        "tracking-wide py-2 px-4 bg-green-500 text-white rounded-3xl text-xl"
      }
    >
      {title}
    </button>
  );
};

export default Button;
