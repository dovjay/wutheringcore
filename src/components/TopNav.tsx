import Link from "next/link";
import { Button } from "./ui/button";

const Links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/characters",
    text: "Characters",
  },
  {
    href: "/echoes",
    text: "Echoes",
  },
  {
    href: "/weapons",
    text: "Weapons",
  },
  {
    href: "/tierlist",
    text: "Tierlist",
  },
];

function NavLink({
  href, text
}: typeof Links[0]) {
  return (
    <Link href={href} passHref>
      <button className="text-zinc-400 hover:text-zinc-100 font-medium transition">
        {text}
      </button>
    </Link>
  );
}

export default function TopNav() {
  return (
    <nav className="px-8 py-4 flex gap-6 items-center bg-zinc-800">
      <Link href="/" passHref>
        <div className="font-bold text-3xl mr-2 group">
          <span className="">Wuthering</span>
          <span className="text-zinc-500 group-hover:text-lime-400 transition">Core</span>
        </div>
      </Link>
      {
        Links.map((navLink, i) => (
          <NavLink href={navLink.href} text={navLink.text} key={i} />
        ))
      }
    </nav>
  );
}
