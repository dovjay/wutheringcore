"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { useContext, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Slider } from "~/components/ui/slider";
import { StatIcons } from "~/constants/statIcons";
import { CharacterOverviewContext } from "~/contexts/CharacterOverviewContext";

function StatInfo({
  stat,
  value,
}: {
  stat: string;
  value: string;
}) {
  return (
    <div className="flex rounded-full bg-zinc-600 justify-between py-1 px-4">
      <div className="flex gap-2 items-center">
        {
          StatIcons.find(s => s.stat.toLowerCase().includes(stat.toLowerCase()))?.icon &&
          <img src={StatIcons.find(s => s.stat.toLowerCase().includes(stat.toLowerCase()))?.icon} className="w-5 h-5" />
        }
        <p className="uppercase">{stat.match(/([A-Z]?[^A-Z]*)/g)?.slice(0, -1).join(" ")}</p>
      </div>
      <p className="font-bold">{value}</p>
    </div>
  )
}

export default function Overview() {
  const { character } = useContext(CharacterOverviewContext);
  const [level, setLevel] = useState([89]);

  return (
    <div className="border border-zinc-600 bg-zinc-800/75 backdrop-blur-lg rounded-xl">
      <div className="flex gap-2 min-h-[32rem]">
        <div className="flex flex-col gap-4 justify-between p-7 basis-2/3">
          {/* Overview */}
          <div>
            <div className="flex gap-4 items-end mb-2">
              <h1 className="font-bold text-4xl">{character?.name}</h1>
              <div className="flex gap-1 mb-1">
                {
                  Array.from({ length: character?.rarity! }).map((_, i) => (
                    <StarFilledIcon className="w-5 h-5" key={i} />
                  ))
                }
              </div>
            </div>

            <div className="flex gap-2">
              <Badge>{character?.weapon}</Badge>
              <Badge>{character?.element}</Badge>
              <Badge>{character?.role}</Badge>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-2xl">Main Stat Lv. {level[0]! + 1}</h3>
            <div className="grid grid-cols-2 gap-2">
              {
                Object.entries(character?.baseStats!).map(([stat, value], i) => (
                  <StatInfo
                    key={i}
                    stat={stat}
                    value={(typeof value === 'number' ? value : value[level[0]!]!).toString()}
                  />
                ))
              }
              <StatInfo stat="crit. rate" value="5%" />
              <StatInfo stat="crit. dmg" value="150%" />
              <StatInfo stat="healing bonus" value="0%" />
              <StatInfo stat={`${character?.element} dmg bonus`} value="0%" />
            </div>
            <div className="flex gap-4 items-center mx-2 font-bold">
              <p className="text-nowrap">Lv. 1</p>
              <Slider min={0} max={89} step={1} value={level} onValueChange={setLevel} />
              <p className="text-nowrap">Lv. 90</p>
            </div>
          </div>

          <div className="font-serif italic">{character?.introduction}</div>
        </div>

        <div className="basis-1/3 relative">
          <img
            src={character?.imageProfile!}
            className="scale-[110%] absolute right-[5%] bottom-[5%] select-none disable-drag"
          />
        </div>
      </div>
    </div>
  );
}
