"use client";
import React from "react";
import dynamic from "next/dynamic";
import { technologies } from "@/constants/technologies";

const AnimatedTooltip = dynamic(
  () => import("@/components/ui/animated/Tooltip")
);

export type TechnologiesProps = {
  className?: string;
  ids?: number[];
  max?: number;
};

const Technologies = ({ className = "", ids, max = 6 }: TechnologiesProps) => {
  return (
    <div className={`flex flex-row flex-wrap items-center ${className}`}>
      <AnimatedTooltip
        items={
          ids
            ? technologies?.filter((technology) => ids.includes(technology.id))
            : technologies
        }
        max={max}
      />
    </div>
  );
};

export default Technologies;
