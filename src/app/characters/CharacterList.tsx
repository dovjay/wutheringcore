import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

export function CharacterCard() {
  return (
    <Link href="/characters/calcharo" passHref>
      <div className={cn(
        "flex flex-col justify-end rounded-xl relative w-48 aspect-[3/4] bg-bottom bg-contain bg-no-repeat overflow-clip group",
        "bg-gradient-to-b from-yellow-500 to-yellow-700",
      )}>
        <img src="/mock/kakarot_card.webp" className="w-full absolute top-0 group-hover:scale-110 transition-transform" />

        <div
          className="w-6 h-6 bg-blue-500 rounded-full absolute top-2 group-hover:top-16 left-2 transition-all"
        />
        <div
          className="w-6 h-6 bg-red-500 rounded-full absolute top-2 group-hover:top-9 left-2 transition-all"
        />
        <div
          className="w-6 h-6 bg-zinc-100 rounded-full absolute top-2 left-2"
        />

        <div className="px-3 py-2 bg-zinc-900/50 relative">
          <p className="font-bold">Calcharo</p> <Badge variant="secondary">Main DPS</Badge>
        </div>
      </div>
    </Link>
  );
}

export default function CharacterList() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Characters</h1>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,12rem)]">
        {
          Array.from({ length: 18 }).map((_, i) => (
            <CharacterCard key={i} />
          ))
        }
      </div>
    </div>
  );
}