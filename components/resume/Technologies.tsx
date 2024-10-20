"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedTooltip = dynamic(
  () => import("@/components/ui/animated/Tooltip")
);

export type TechnologiesProps = {
  className?: string;
};

const technologies: {
  id: number;
  name: string;
  image: string;
  description: string;
}[] = [
  {
    id: 1,
    name: "JavaScript",
    image: "/images/technologies/js.webp",
    description: "",
  },
  {
    id: 2,
    name: "TypeScript",
    image: "/images/technologies/ts.webp",
    description: "",
  },
  {
    id: 3,
    name: "React",
    image: "/images/technologies/react.webp",
    description: "",
  },
  {
    id: 4,
    name: "React Native",
    image: "/images/technologies/react-native.svg",
    description: "",
  },
  {
    id: 5,
    name: "Next.JS",
    image: "/images/technologies/next-js.svg",
    description: "",
  },
  {
    id: 6,
    name: "Python",
    image: "/images/technologies/python.webp",
    description: "",
  },
  {
    id: 7,
    name: "Mongo DB",
    image: "/images/technologies/mongodb.svg",
    description: "",
  },
  {
    id: 8,
    name: "Firebase",
    image: "/images/technologies/firebase.webp",
    description: "",
  },
  {
    id: 9,
    name: "Auth0",
    image: "/images/technologies/auth0.webp",
    description: "",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    image: "/images/technologies/tailwind.webp",
    description: "",
  },
  {
    id: 11,
    name: "Bootstrap CSS",
    image: "/images/technologies/bootstrap.svg",
    description: "",
  },
  {
    id: 12,
    name: "Material UI",
    image: "/images/technologies/material-ui.webp",
    description: "",
  },
  {
    id: 13,
    name: "Git",
    image: "/images/technologies/git.webp",
    description: "",
  },
  {
    id: 14,
    name: "GraphQL",
    image: "/images/technologies/graphql.webp",
    description: "",
  },
  {
    id: 15,
    name: "Clerk",
    image: "/images/technologies/clerk.png",
    description: "",
  },
  {
    id: 16,
    name: "Prisma",
    image: "/images/technologies/prisma.png",
    description: "",
  },
  {
    id: 17,
    name: "& More...",
    image: "/images/technologies/dots.png",
    description: "",
  },
];

const Technologies = ({ className = "" }: TechnologiesProps) => {
  return (
    <div className={`flex flex-row flex-wrap items-center ${className}`}>
      <AnimatedTooltip items={technologies} max={6} />
    </div>
  );
};

export default Technologies;
