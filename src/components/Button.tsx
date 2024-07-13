import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string; // Optional className prop
  type?: "button" | "submit" | "reset"; // Optional type prop
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className,
  type,
}) => {
  const buttonClasses = `bg-primary text-white text-[25px]/[25px] font-black italic py-3 px-4 rounded uppercase rounded-lg ${className}`;

  return (
    <button className={buttonClasses} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
