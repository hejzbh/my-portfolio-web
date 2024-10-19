import React from "react";
import dynamic from "next/dynamic";

const GeminiLines = dynamic(() => import("@/components/ui/animated/Gemini"));

export interface WiresProps {
  className?: string;
}

const Wires = ({ className = "" }: WiresProps) => {
  return (
    <div className={`px-4 xl:px-0 ${className}`}>
      <GeminiLines
        title="I merge your ideas into a project, as perfectly as these lines"
        className="py-20"
      />
    </div>
  );
};

export default Wires;
