import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Evervault = dynamic(() => import("@/components/ui/animated/Evervault"));
const FlipWords = dynamic(() => import("@/components/ui/animated/FlipWords"));
const Button = dynamic(() => import("@/components/ui/Button"));

export interface HeroProps {
  className?: string;
}

const Hero = ({ className = "" }: HeroProps) => {
  return (
    <Evervault>
      <section
        className={`min-h-[30em] flex flex-col items-center justify-center space-y-10 md:space-y-0 md:justify-between md:space-x-10 md:flex-row p-10 xl:p-20 3xl:p-[10rem] ${className}`}
      >
        {/** Text */}
        <div className="text-center md:text-left">
          <div className="text-secondary uppercase text-sm xl:text-lg 2xl:text-xl">
            Hi, I'm a
            <FlipWords
              duration={1500}
              words={[
                "creative",
                "Passionate",
                "Innovative",
                "Adaptive",
                "Detail Focused",

                "STRATEGIC",
                "TECH-SAVVY",
                "PROACTIVE",
              ]}
              className="text-primary"
            />
            Software
          </div>
          <h1 className="text-[60px] xl:text-[70px] 2xl:text-[80px] text-main font-semibold text-primary">
            Developer
          </h1>
          <div className="text-md">
            <p>
              I'm a software developer specializing in scalable web & mobile
              apps.
            </p>

            <p>
              {" "}
              Explore my{" "}
              <Button
                href="/portfolio"
                title="Portfolio"
                variant="primary"
                className="text-primary  hover:underline"
              />{" "}
              and{" "}
              <Button
                href="/resume"
                title="Resume"
                variant="primary"
                className="text-primary  hover:underline"
              />
              .
            </p>
          </div>
        </div>

        {/** Image */}
        <div>
          <Image
            src={"/images/my-photo.webp"}
            loading="lazy"
            width={400}
            height={400}
            alt="Me"
            className="rounded-3xl"
          />
        </div>
      </section>
    </Evervault>
  );
};

export default Hero;
