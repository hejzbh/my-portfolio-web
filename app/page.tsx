import dynamic from "next/dynamic";

const ScrollToSectionListener = dynamic(
  () => import("@/components/ScrollToSectionListener")
);
const Hero = dynamic(() => import("@/components/Hero"));
const Wires = dynamic(() => import("@/components/Wires"));
const Portfolio = dynamic(() => import("@/components/portfolio/Portfolio"));
const SkillsAndExperience = dynamic(
  () => import("@/components/resume/SkillsAndExperience")
);

export default function Home() {
  return (
    <>
      <Hero />
      <Wires />
      <Portfolio />
      <SkillsAndExperience />

      <ScrollToSectionListener />
    </>
  );
}
