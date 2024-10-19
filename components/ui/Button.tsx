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
        className="text-primary  hover:underline"
      >
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
      className={`p-3 px-6 rounded-3xl transition-all duration-300 ease-in-out ${
        Icon ? "flex items-center space-x-3 justify-center" : ""
      } ${classNames[variant]} ${className}`}
      title={title}
    >
      {Icon && <Icon size={18} />}

      <p className="text-md 2xl:text-[1.05rem]">{title}</p>
    </button>
  );
};

export default Button;
