import React from "react";

export interface SectionHeadingProps {
  className?: string;
  title: string;
  description: string;
}

const SectionHeading = ({
  className = "",
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className={`md:max-w-[70%] space-y-3 mb-14 md:mb-20 ${className}`}>
      <h2
        className={`text-secondary font-semibold text-4xl xl:text-6xl border-l-2 border-primary pl-2`}
      >
        {title}
      </h2>
      <p className="text-paragraph text-sm md:text-lg 3xl:text-xl ">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
