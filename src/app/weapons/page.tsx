import { Separator } from "~/components/ui/separator";
import Filters from "./Filters";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Toggle } from "~/components/ui/toggle";
import { Button } from "~/components/ui/button";
import Link from "next/link";

function WeaponCard() {
  return (
    <Popover>
      <PopoverTrigger className="rounded-xl w-40 overflow-clip bg-zinc-800 border border-zinc-500 group">
        <div className="w-full aspect-square bg-gradient-to-br from-green-400 to-green-500 relative overflow-clip">
          <img src="/mock/sabyrboar.png" className="absolute w-full group-hover:scale-110 transition-transform" />
          <div className="w-full h-full bg-zinc-900/20 relative group-hover:bg-zinc-900/0 transition" />
        </div>
        <div className="px-1.5 py-1 flex flex-col gap-1 text-left">
          <p className="font-bold">Abyss Surge</p>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-4 bg-zinc-300 rounded-full" />
            <p className="text-zinc-500 text-sm">• CRIT RATE</p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-6 !pt-3 min-w-80">
        <div>
          <p className="font-bold text-sm">Incision</p>
          <p className="text-xs">
            Increases Energy Regen by 12.8%. When hitting a target with Resonance Skill, increases Basic Attack DMG Bonus by 10%, lasting for 8. When hitting a target with Basic Attacks, increases Resonance Skill DMG Bonus by 10%, lasting for 8s.
          </p>
        </div>
        <div className="flex justify-between -m-4 text-xs px-4 py-2 bg-zinc-800/50 rounded-b-md">
          <div className="flex gap-5">
            <div>
              <p>ATK</p>
              <p className="font-bold">587</p>
            </div>
            <div>
              <p>CRIT RATE</p>
              <p className="font-bold">24.3%</p>
            </div>
          </div>
          <Button size="sm" variant="link" asChild>
            <Link href="/weapons/abyss-surge">
              See More
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function Weapons() {
  return (
    <main>
      <section className="container my-10">
        <div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">Weapons</h1>
            <Filters />
            <Separator className="my-6" />
            <div className="flex flex-wrap gap-4">
              {
                Array.from({ length: 24 }).map((_, i) => (
                  <WeaponCard key={i} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}