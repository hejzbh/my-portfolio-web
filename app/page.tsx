import dynamic from "next/dynamic";

const ScrollToSectionListener = dynamic(
  () => import("@/components/ScrollToSectionListener")
);
const Hero = dynamic(() => import("@/components/Hero"));
const Wires = dynamic(() => import("@/components/Wires"));
const Portfolio = dynamic(() => import("@/components/portfolio/Portfolio"));

export default function Home() {
  return (
    <>
      <Hero />
      <Wires />
      <Portfolio />

      <ScrollToSectionListener />
    </>
  );
}
