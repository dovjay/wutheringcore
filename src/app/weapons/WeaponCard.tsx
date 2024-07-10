import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { WeaponTypes } from "~/constants/weaponType";
import { cn } from "~/lib/utils";
import { weapons } from "~/server/db/schema";

export default function WeaponCard({
  weapon,
}: {
  weapon: typeof weapons.$inferSelect;
}) {
  return (
    <Popover>
      <PopoverTrigger className="rounded-xl w-40 overflow-clip bg-zinc-800 border border-zinc-500 group h-fit">
        <div className={cn("w-full aspect-square relative overflow-clip", `rarity-${weapon.rarity}`)}>
          <img src={weapon.image as string} className="absolute w-full group-hover:scale-110 transition-transform" />
          <div className="w-full h-full bg-zinc-900/20 relative group-hover:bg-zinc-900/0 transition" />
        </div>
        <div className="p-2 flex flex-col gap-1 text-left">
          <p className="font-bold text-md text-nowrap text-ellipsis overflow-hidden">{weapon.name}</p>
          <div className="flex gap-1.5 items-center">
            <img
              src={WeaponTypes.find((type) => type.name === weapon.type)?.icon}
              className="w-5 aspect-square"
            />
            <p className="text-zinc-400 text-sm">• {weapon.subStat.stat}</p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-6 !pt-3 min-w-80">
        <div>
          <p className="font-bold text-sm">{weapon.skill.name}</p>
          <p className="text-sm weapon-skill" dangerouslySetInnerHTML={{ __html: weapon.skill.description[4] as string }} />
        </div>
        <div className="flex justify-between -m-4 text-sm px-4 py-2 bg-zinc-800/50 rounded-b-md">
          <div className="flex gap-5">
            <div>
              <p>ATK</p>
              <p className="font-bold">{Math.round(Number(weapon.mainStat[89]))}</p>
            </div>
            <div>
              <p>{weapon.subStat.stat}</p>
              <p className="font-bold">{weapon.subStat.value[89]}</p>
            </div>
          </div>
          <Button size="sm" variant="secondary" asChild>
            <Link href={`/weapons/${encodeURIComponent(weapon.name.toLowerCase().replaceAll(" ", "-"))}`}>
              Overview
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}