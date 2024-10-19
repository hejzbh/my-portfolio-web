"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Evervault = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(3500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    setRandomString(randomString);
  }

  return (
    <div className={cn(className)}>
      <div
        onMouseMove={onMouseMove}
        className="group/card  w-full relative overflow-hidden"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10">
          <div className="relative ">
            <span className="dark:text-white text-black z-20 o">{text}</span>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none opacity-60">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const syntaxElements = [
  "const",
  "let",
  "function",
  "<HAZIM>",
  "return",
  "if",
  "else",
  "for",
  "<HAZIM>",
  "while",
  "=>",
  "===",
  "!==",
  "&&",
  "||",
  "{",
  "}",
  "<HAZIM>",
  "(",
  ")",
  "[",
  "]",
  "+",
  "<HAZIM>",
  "-",
  "*",
  "/",
  "=",
  ";",
  "console.log",
  "Math.random",
  "new",
  "class",
  "<HAZIM>",
  "extends",
  "import",
  "<HAZIM>",
  "export",
  "from",
  "null",
  "true",
  "false",
];

function generateRandomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result +=
      syntaxElements[Math.floor(Math.random() * syntaxElements.length)] + " ";
  }
  return result.trim();
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Evervault;
