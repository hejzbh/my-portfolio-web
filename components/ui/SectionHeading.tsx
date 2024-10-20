import React from "react";
import { ButtonProps } from "./Button";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/ui/Button"));

export interface SectionHeadingProps {
  className?: string;
  title: string;
  description: string;
  buttonProps?: ButtonProps;
}

const SectionHeading = ({
  className = "",
  title,
  description,
  buttonProps,
}: SectionHeadingProps) => {
  return (
    <div
      className={` space-y-3 mb-14 md:mb-20 ${
        buttonProps
          ? "flex items-start justify-between flex-col space-y-3 md:items-center md:space-y-0 md:flex-row"
          : ""
      } ${className}`}
    >
      <div className="md:max-w-[70%]">
        <h2
          className={`text-secondary font-semibold text-4xl xl:text-6xl border-l-2 border-primary pl-2`}
        >
          {title}
        </h2>
        <p className="text-paragraph text-sm md:text-lg 3xl:text-xl pt-2 ">
          {description}
        </p>
      </div>

      {buttonProps && <Button {...buttonProps} />}
    </div>
  );
};

export default SectionHeading;
