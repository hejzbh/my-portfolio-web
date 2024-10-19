"use client";
import { useAudioEffects } from "@/hooks/use-audio-effects";

import Link from "next/link";

import React from "react";
import { IconType } from "react-icons";

export interface ButtonProps {
  className?: string;
  variant: "primary" | "secondary";
  Icon?: IconType;
  onClick?: () => void;
  href?: string;
  linkAsButton?: boolean;
  playClickAudio?: boolean;
  title: string;
}

const classNames = {
  primary: "bg-primary hover:bg-secondary text-white",
  secondary: "bg-secondary hover:bg-primary text-white",
};

const Button = ({
  className = "",
  variant = "primary",
  Icon,
  title = "",
  linkAsButton,
  playClickAudio = true,
  href,
  onClick = () => {},
}: ButtonProps) => {
  const { playAudio } = useAudioEffects();

  if (href) {
    return (
      <Link
        onClick={() => {
          if (playClickAudio) {
            playAudio("/mp3/click.wav");
          }
        }}
        href={href}
        title={title}
        className={` ${
          linkAsButton
            ? `p-4 px-7 md:p-5 md:px-8 4xl:p-6 4xl:px-9 rounded-3xl transition-all duration-300 ease-in-out text-xs md:text-md 2xl:text-[1.05rem] 4xl:text-[1.150rem] ${
                Icon ? "flex items-center space-x-3 justify-center" : ""
              } ${classNames[variant]} ${className}`
            : "text-primary  hover:underline"
        }`}
      >
        {Icon && <Icon size={18} />}
        {title}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        if (playClickAudio) {
          playAudio("/mp3/click.wav");
        }

        onClick();
      }}
      className={`p-4 px-7 md:p-5 md:px-8 4xl:p-6 4xl:px-9 rounded-3xl transition-all duration-300 ease-in-out ${
        Icon ? "flex items-center space-x-3 justify-center" : ""
      } ${classNames[variant]} ${className}`}
      title={title}
    >
      {Icon && <Icon size={18} />}

      <p className="text-xs md:text-md 2xl:text-[1.05rem] 4xl:text-[1.150rem]">
        {title}
      </p>
    </button>
  );
};

export default Button;
