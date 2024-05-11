import Star from "@/lib/assets/star-31x31.svg"
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg"
import Link from "next/link";

export default function Home() {
  const clients = [1,2,3];

  return (
    <main className="container">
      <section className="hero flex flex-col justify-center h-svh max-w-[786px] mx-auto">
        <h1 className="font-display text-[108px] leading-none">Women Land Creative Studio</h1>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 my-5">
          <Star className="text-design-accent col-start-2"/>
          <h3 className="col-start-3 text-justify uppercase">
          WE ARE A FULL-SERVICE CREATIVE STUDIO CREATING AWESOME DIGITAL EXPERIENCES AND SOLUTIONS. OUR MISSION IS TO MAKE WORK PROCESS MEANINGFUL.
          </h3>
        </div>
      </section>
    </main>
  );
}
