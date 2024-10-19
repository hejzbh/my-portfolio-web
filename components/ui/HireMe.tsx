"use client";
import React from "react";
import dynamic from "next/dynamic";
import { BsSendArrowUp } from "react-icons/bs";

const Button = dynamic(() => import("@/components/ui/Button"));

export interface HireMeProps {
  className?: string;
}

const HireMe = ({ className = "" }: HireMeProps) => {
  return (
    <Button
      title="Hire Me"
      variant="primary"
      Icon={BsSendArrowUp}
      className={`${className}`}
    />
  );
};

export default HireMe;
