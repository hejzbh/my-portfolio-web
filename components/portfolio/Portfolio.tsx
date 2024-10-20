import React from "react";
import dynamic from "next/dynamic";

const SectionHeading = dynamic(() => import("@/components/ui/SectionHeading"));
const ProjectsList = dynamic(
  () => import("@/components/portfolio/ProjectsList")
);

export interface PortfolioProps {
  className?: string;
}

const Portfolio = ({ className = "" }: PortfolioProps) => {
  return (
    <section
      id="portfolio"
      className={`p-4 !py-14 md:p-[5rem] xl:p-[10rem] ${className}`}
    >
      {/* Heading */}
      <SectionHeading
        title="Portfolio"
        description="My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best."
      />
      {/** Projecst */}
      <ProjectsList />
    </section>
  );
};

export default Portfolio;
