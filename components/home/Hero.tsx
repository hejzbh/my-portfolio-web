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
        className={`min-h-[100dvh] sm:min-h-[40em] flex flex-col items-center justify-center space-y-10 sm:space-y-0 sm:justify-between sm:space-x-10 sm:flex-row p-4 md:p-[5rem] xl:p-[10rem] ${className}`}
      >
        {/** Text */}
        <div className="text-center sm:text-left">
          <div
            className={`text-secondary uppercase  text-sm md:text-lg 3xl:text-2xl`}
          >
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
          <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 4xl:text-9xl text-main font-semibold my-4 md:mb-7 text-primary">
            Developer
          </h1>
          <div className="text-sm md:text-sm 3xl:text-lg">
            <p>
              I'm a Hazim Tulumovic, specializing in scalable web & mobile apps.
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
            className="rounded-full md:rounded-3xl w-[250px] xl:w-[400px]"
          />
        </div>
      </section>
    </Evervault>
  );
};

export default Hero;
