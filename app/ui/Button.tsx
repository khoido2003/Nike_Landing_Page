import React from "react";
import Image from "next/image";

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
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none  

      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "border-coral-red bg-coral-red text-white"}
      
      ${fullWidth ? "w-full" : ""} 
      `}
    >
      {label}
      {iconUrl && (
        <Image src={iconUrl} alt="Icon" className="ml-2 h-5 w-5 rounded-full" />
      )}
    </button>
  );
};

export default Button;
