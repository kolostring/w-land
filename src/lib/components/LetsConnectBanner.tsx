import Link from "next/link";
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg";

export default function LetsConnectBanner(){
  return <div className="flex flex-col justify-center items-center rounded-2xl aspect-[12/6] bg-design-background-secondary">
    <h3 className="uppercase text-sm mb-4 text-design-accent">Got a project in mind?</h3>
    <h1 className="font-display uppercase text-8xl mb-7">Let&apos;s connect</h1>
    <Link className="flex px-8 py-2 items-center gap-1 rounded-full font-medium text-design-background-primary bg-design-accent" href={"/lets-talk"}>
          <h3>Let&apos;s talk</h3>
          <Arrow height="1rem"/>
    </Link>
  </div>
}