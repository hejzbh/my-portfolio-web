import React from "react";

export interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return <footer className={`${className}`}></footer>;
};

export default Footer;
