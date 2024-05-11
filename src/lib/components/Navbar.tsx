"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/lib/assets/white-logo-79x19.svg"
import Arrow from "@/lib/assets/arrow-rotated-10x11.svg"

const links : {text: string, href: string}[] = [
  {text: "About", href: "/about"},
  {text: "Services", href: "/services"},
  {text: "Projects", href: "/projects"},
] 

export default function Navbar(){
  const pathname = usePathname();

  return <nav className="container flex items-center font-body mt-9">
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
            <h3 className="block px-[2px] my-auto">{text}</h3>
            {
              pathname.includes(href) && 
              <div className={"h-[2px] bg-design-accent"}></div>
            }
          </Link>
        )
      }

      <Link className="flex px-8 py-2 items-center gap-1 rounded-full font-medium text-design-background-primary bg-design-accent" href={"/lets-talk"}>
        <h3>Let&apos;s talk</h3>
        <Arrow height="1rem"/>
      </Link>
    </div>
    
  </nav>
}