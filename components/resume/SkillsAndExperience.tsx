import React from "react";
import dynamic from "next/dynamic";

const SectionHeading = dynamic(() => import("@/components/ui/SectionHeading"));
const Technologies = dynamic(() => import("@/components/resume/Technologies"));
const Journey = dynamic(() => import("@/components/resume/Journey"));

export interface SkillsAndExperienceProps {
  className?: string;
}

const SkillsAndExperience = ({ className = "" }: SkillsAndExperienceProps) => {
  return (
    <section
      id="resume"
      className={`p-4 py-14 md:p-[5rem] xl:p-[10rem] ${className}`}
    >
      {/* Heading */}
      <SectionHeading
        title="Skills & Experience"
        description="An overview of my key skills, technologies I work with, tools I use, and my professional journey so far."
        buttonProps={{
          title: "Download CV",
          variant: "primary",
        }}
      />

      {/** Technologies I work with */}
      <Technologies className="mb-10" />

      {/** Journey */}
      <Journey />
    </section>
  );
};

export default SkillsAndExperience;
