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
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Hero />
      <Wires />
      <Portfolio />
      <SkillsAndExperience />
      <Contact />
      <Footer />

      <ScrollToSectionListener />
    </>
  );
}
