import React from "react";

export interface PortfolioProps {
  className?: string;
}

const Portfolio = ({ className = "" }: PortfolioProps) => {
  return (
    <section id="portfolio" className={`p-4 min-h-[300em] ${className}`}>
      Portfolio
    </section>
  );
};

export default Portfolio;
