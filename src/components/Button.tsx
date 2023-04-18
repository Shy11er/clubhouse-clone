import React from "react";

type Props = {
  onClick?: () => void;
  disabled?: boolean;
  clsName: string;
  title: string;
};

const Button: React.FC<Props> = ({ onClick, disabled, clsName, title }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={clsName}
    >
      {title}
    </button>
  );
};

export default Button;
