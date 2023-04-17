import React from "react";

type Props = {
  onClick: () => void;
  disabled: boolean;
  className: string;
};

const Button: React.FC<Props> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={className}
    ></button>
  );
};

export default Button;
