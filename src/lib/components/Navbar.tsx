"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/lib/assets/white-logo-79x19.svg"
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg"
import useScroll from "../hooks/useScroll";
import { useEffect, useRef} from "react";

const links : {text: string, href: string}[] = [
  {text: "About", href: "/about"},
  {text: "Services", href: "/services"},
  {text: "Projects", href: "/projects"},
] 

export default function Navbar(){
  const pathname = usePathname();

  const currentScroll = useScroll();
  const lastScrollRef = useRef<number>(0);
  const scrollVisibilityPercentRef = useRef<number>(0);

  const navRef = useRef<HTMLElement>(null);
  
  useEffect(()=>{
    const height = navRef.current?.getBoundingClientRect().height;
    if(height){
      const deltaTransform = (lastScrollRef.current-currentScroll)/height * 100;
      const transform = scrollVisibilityPercentRef.current+deltaTransform;

      scrollVisibilityPercentRef.current = (Math.max(-100, Math.min(0, transform)));
    }

    lastScrollRef.current = currentScroll;
  }, [currentScroll]);

  return <nav ref={navRef} className={`w-full fixed bg-opacity-90 bg-design-background-primary backdrop-blur-sm`} style={{transform: `translate(0px, ${scrollVisibilityPercentRef.current}%)`}}>
    <div className="container flex items-center font-body mt-9 mb-6">
      <Link href={"/"} className="logo">
        <Logo/>
      </Link>

      <div className="flex uppercase gap-10 text-sm ml-auto">
        {
          links.map(({href, text}) => 
            <Link 
            href={href} 
            key={href}
            className={`flex flex-col ${pathname.includes(href) ? "text-design-accent" : ""}`}
            >
              <span className="block px-[2px] my-auto">{text}</span>
              {
                pathname.includes(href) && 
                <div className={"h-[2px] bg-design-accent"}></div>
              }
            </Link>
          )
        }

        <Link className="flex px-8 py-2 items-center gap-1 rounded-full font-medium text-design-background-primary bg-design-accent" href={"/lets-talk"}>
          <span>Let&apos;s talk</span>
          <Arrow height="1rem"/>
        </Link>
      </div>
    </div>
  </nav>
}