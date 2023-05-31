import React, { ReactElement } from "react";

type Props = {
  isDisabled: boolean;
  title: string;
  img?: ReactElement;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const StepButton: React.FC<Props> = ({ isDisabled, title, img, onClick }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={
        isDisabled
          ? "disabled px-4 py-3"
          : "rounded-full bg-[#0d1117] px-6 py-3 text-gray-100 font-bold text-lg flex items-center hover:scale-105"
      }
    >
      {title}
      {img}
    </button>
  );
};

export default StepButton;
