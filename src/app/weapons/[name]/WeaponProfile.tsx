"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Slider } from "~/components/ui/slider";
import { cn } from "~/lib/utils";
import { weapons } from "~/server/db/schema";

export default function WeaponProfile({
  weapon,
}: {
  weapon: typeof weapons.$inferSelect;
}) {
  const [level, setLevel] = useState(1);
  const [rank, setRank] = useState(1);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex gap-4 items-center max-md:sticky max-md:top-4">
        <img
          className={
            cn("rounded-xl w-32 aspect-square", `rarity-${weapon?.rarity}`)
          }
          src={weapon?.image as string}
        />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex max-md:flex-wrap gap-3 items-center">
            <h2 className="font-bold text-xl">{weapon?.name}</h2>
            <Badge variant="outline">{weapon?.type}</Badge>
            <Badge variant="outline">{weapon?.rarity} <StarFilledIcon /></Badge>
          </div>
          <div className="flex gap-4 text-sm items-center">
            <div className="flex gap-2">
              <h4>ATK</h4>
              <p className="font-bold">{Math.round(Number(weapon?.mainStat[level - 1]))}</p>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <div className="flex gap-2">
              <h4>{weapon?.subStat.stat}</h4>
              <p className="font-bold">{weapon?.subStat.value[level - 1]}</p>
            </div>
          </div>
          <div className="flex max-md:flex-wrap gap-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between font-bold">
                <span>Rank</span><span>{rank}</span>
              </div>
              <Slider min={1} max={5} step={1} onValueChange={(e) => setRank(e[0] as number)} />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between font-bold">
                <span>Level</span><span>{level}</span>
              </div>
              <Slider min={1} max={90} step={1} onValueChange={(e) => setLevel(e[0] as number)} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 p-4 bg-zinc-900 border border-zinc-700 rounded-xl">
        <h2 className="font-bold text-lg">{weapon.skill.name}</h2>
        <p className="weapon-skill" dangerouslySetInnerHTML={{ __html: weapon.skill.description[rank - 1] as string }} />
        <Separator className="my-4" />
        <p className="font-serif italic text-sm">
          {weapon.about}
        </p>
      </div>
    </div>
  );
}