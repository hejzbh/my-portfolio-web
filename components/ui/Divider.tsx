import React from "react";

export interface DividerProps {
  className?: string;
}

const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div
      className={`bg-[#E5E5E5] h-[1px] w-full rounded-3xl ${className}`}
    ></div>
  );
};

export default Divider;
