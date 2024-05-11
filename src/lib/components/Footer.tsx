import Logo from "@/lib/assets/white-logo-79x19.svg"
import Link from "next/link"

const links : {text: string, href: string}[] = [
  {text: "About", href: "/about"},
  {text: "Services", href: "/services"},
  {text: "Projects", href: "/projects"},
] 

export default function Footer(){
  return <footer className="grid grid-cols-3 mt-7 mb-11">
    <Link href={"/"} className="logo">
        <Logo/>
    </Link>
    
    <div className="flex justify-center">
      {links.map(({text, href})=>{
        return <Link key={href} href={href} className="uppercase font-display w-full text-center">
          {text}
        </Link>
      })}
    </div>
    
    <Link href={"/linkedin"} className="uppercase font-display text-design-accent text-end">
        Linkedin
    </Link>
  </footer>
}