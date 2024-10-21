"use client";
import React from "react";
import { navigationLinks } from "@/constants/navigationLinks";
import Link from "next/link";
import { useAudioEffects } from "@/hooks/use-audio-effects";
import { usePathname } from "next/navigation"; // Import usePathname

export interface NavigationLinksProps {
  className?: string;
}

const NavigationLinks = ({ className = "" }: NavigationLinksProps) => {
  const { playAudio } = useAudioEffects();
  const pathname = usePathname();

  return (
    <ul className={`space-y-3 ${className}`}>
      {navigationLinks?.map((link) => {
        const Icon = link.Icon;
        const isActive = pathname === link.href; // Check if the link is active

        return (
          <li
            onClick={() => {
              playAudio("/mp3/click.wav");
            }}
            key={link.href}
          >
            <Link
              scroll
              href={link.href}
              title={link.name}
              className={`p-2 py-3  rounded-lg flex items-center space-x-2 text-secondary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white 
                ${isActive ? "bg-primary text-white" : ""}`} // Add active link class
            >
              <Icon className="text-lg 2xl:text-xl" />
              <p className="text-sm 2xl:text-[1.050rem] 4xl:text-[1.150rem] ">
                {link.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationLinks;
