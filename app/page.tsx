import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/Hero"));
const Wires = dynamic(() => import("@/components/home/Wires"));

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Wires />
      <div className="min-h-[30em] bg-[red]"></div>
      <div className="min-h-[30em]"></div>
      <div className="min-h-[30em]"></div>
      <div className="min-h-[30em]"></div>
      <div className="min-h-[30em]"></div>
      <div className="min-h-[30em]"></div>
      <div className="min-h-[30em]"></div>
      <div className="min-h-[30em]"></div>
    </div>
  );
}
