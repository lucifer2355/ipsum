import React, { useCallback } from "react";
import { cn } from "../../utils/cs";

interface ButtonProps {
  onClick: VoidFunction;
  classNames?: string;
  children: React.ReactNode;
}

function Button({ onClick, classNames, children }: ButtonProps) {
  const handleOnClick = () => useCallback(onClick, []);

  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "bg-[#FFBA00] text-[#222222] font-semibold text-sm leading-4 px-8 py-4 rounded-sm",
        classNames
      )}
    >
      {children}
    </button>
  );
}

export default Button;
