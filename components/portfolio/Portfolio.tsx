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
        description="A showcase of my work, featuring projects that highlight my expertise in development."
      />
      {/** Projecst */}
      <ProjectsList />
    </section>
  );
};

export default Portfolio;
