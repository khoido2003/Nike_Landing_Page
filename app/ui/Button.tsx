import React from "react";

type ButtonProps = {
  label: string;
  iconUrl?: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  fullWidth?: boolean;
};

const Button = ({
  label,
  iconUrl,
  borderColor,
  backgroundColor,
  textColor,
  fullWidth,
}: ButtonProps): React.JSX.Element => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none`}
    >
      {label}
    </button>
  );
};

export default Button;
