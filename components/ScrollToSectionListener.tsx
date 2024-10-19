"use client";

import { usePathname } from "next/navigation";

import { useEffect } from "react";

const ScrollToSectionListener = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(window.location);
    if (!window.location.hash) return;

    document
      .querySelector(window.location.hash)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);
  return null;
};

export default ScrollToSectionListener;
