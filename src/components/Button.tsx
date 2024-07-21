import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string; // Optional className prop
  type?: "button" | "submit" | "reset"; // Optional type prop
  buttonType?: "primary" | "secondary"; // Optional buttonType prop
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className,
  type,
  buttonType = "primary",
  active = false,
}) => {
  const baseClasses =
    "text-[25px]/[25px] py-3 px-4 rounded uppercase rounded-lg font-black italic";
  const primaryClasses = `bg-primary text-white" ${baseClasses} ${className} `;
  const secondaryClasses = `bg-transparent border-2 border-white  ${baseClasses} ${className} ${
    active ? "bg-white text-background shadow-custom" : "text-shadow-custom"
  }`;
  const buttonClasses =
    buttonType === "primary" ? primaryClasses : secondaryClasses;

  return (
    <button className={buttonClasses} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
