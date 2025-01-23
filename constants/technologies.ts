export enum TechnologyID {
  JavaScript = 1,
  TypeScript = 2,
  React = 3,
  ReactNative = 4,
  NextJS = 5,
  ViteJS = 6,
  Python = 7,
  MongoDB = 8,
  Firebase = 9,
  Auth0 = 10,
  Tailwind = 11,
  Bootstrap = 12,
  MaterialUI = 13,
  Git = 14,
  GraphQL = 15,
  Clerk = 16,
  Prisma = 17,
  Zustand = 18,
  FramerMotion = 19,
  Stripe = 20,
  MORE = -1,
  // Additional IDs can be added as needed
}

export const technologies: {
  id: number;
  name: string;
  image: string;
  description: string;
}[] = [
  {
    id: TechnologyID.JavaScript,
    name: "JavaScript",
    image: "/images/technologies/js.webp",
    description: "",
  },
  {
    id: TechnologyID.TypeScript,
    name: "TypeScript",
    image: "/images/technologies/ts.webp",
    description: "",
  },
  {
    id: TechnologyID.React,
    name: "React",
    image: "/images/technologies/react.webp",
    description: "",
  },
  {
    id: TechnologyID.ReactNative,
    name: "React Native",
    image: "/images/technologies/react-native.svg",
    description: "",
  },
  {
    id: TechnologyID.NextJS,
    name: "Next.JS",
    image: "/images/technologies/next-js.svg",
    description: "",
  },
  {
    id: TechnologyID.ViteJS,
    name: "Vite.JS",
    image: "/images/technologies/vite.jpg",
    description: "",
  },
  {
    id: TechnologyID.Python,
    name: "Python",
    image: "/images/technologies/python.webp",
    description: "",
  },
  {
    id: TechnologyID.MongoDB,
    name: "Mongo DB",
    image: "/images/technologies/mongodb.svg",
    description: "",
  },
  {
    id: TechnologyID.Stripe,
    name: "Stripe",
    image: "/images/technologies/stripe.png",
    description: "",
  },
  {
    id: TechnologyID.Firebase,
    name: "Firebase",
    image: "/images/technologies/firebase.webp",
    description: "",
  },
  {
    id: TechnologyID.Auth0,
    name: "Auth0",
    image: "/images/technologies/auth0.webp",
    description: "",
  },
  {
    id: TechnologyID.Tailwind,
    name: "Tailwind CSS",
    image: "/images/technologies/tailwind.webp",
    description: "",
  },
  {
    id: TechnologyID.Bootstrap,
    name: "Bootstrap CSS",
    image: "/images/technologies/bootstrap.svg",
    description: "",
  },
  {
    id: TechnologyID.MaterialUI,
    name: "Material UI",
    image: "/images/technologies/material-ui.webp",
    description: "",
  },
  {
    id: TechnologyID.Git,
    name: "Git",
    image: "/images/technologies/git.webp",
    description: "",
  },
  {
    id: TechnologyID.GraphQL,
    name: "GraphQL",
    image: "/images/technologies/graphql.webp",
    description: "",
  },
  {
    id: TechnologyID.Clerk,
    name: "Clerk",
    image: "/images/technologies/clerk.png",
    description: "",
  },
  {
    id: TechnologyID.Prisma,
    name: "Prisma",
    image: "/images/technologies/prisma.png",
    description: "",
  },
  {
    id: TechnologyID.Zustand,
    name: "Zustand",
    image: "/images/technologies/zustand.png",
    description: "",
  },
  {
    id: TechnologyID.FramerMotion,
    name: "Framer Motion",
    image: "/images/technologies/framer-motion.png",
    description: "",
  },
  {
    id: TechnologyID.MORE, // Added as a placeholder for potential future additions
    name: "& More...",
    image: "/images/technologies/dots.png",
    description: "",
  },
];
