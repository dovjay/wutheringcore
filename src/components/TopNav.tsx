import Link from "next/link";
import { Button } from "./ui/button";

export default function TopNav() {
  return (
    <nav className="px-8 py-4 flex gap-8 items-center bg-zinc-900">
      <Link href="/" passHref>
        <div className="font-bold text-3xl mr-2 group">
          <span className="group-hover:text-zinc-400 transition">Wuthering</span>
          <span className="text-lime-500 group-hover:text-lime-400 transition">Core</span>
        </div>
      </Link>
      <Button variant="ghost" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/tierlist">Tierlist</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/characters">Characters</Link>
      </Button>
    </nav>
  );
}