import React from "react";

export interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer
      className={`p-4 !pt-20 !pb-4 md:p-[5rem] text-center text-paragraph xl:p-[10rem] text-xs md:text-base 3xl:text-lg  ${className}`}
    >
      Copyright © {new Date().getFullYear()} Hazim Tulumovic. All Rights
      Reserved.
    </footer>
  );
};

export default Footer;
