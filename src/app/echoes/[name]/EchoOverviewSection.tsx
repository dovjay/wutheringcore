"use client";

import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Slider } from "~/components/ui/slider";
import { getEchoMainStat } from "~/constants/echoMainStat";
import { EchoSubStat } from "~/constants/echoSubStat";
import { sonataEffects } from "~/constants/sonataEffects";
import { echoes } from "~/server/db/schema";

export default function EchoOverviewSection({
  Echo,
}: {
  Echo: typeof echoes.$inferSelect;
}) {
  const [rank, setRank] = useState([5]);
  const [level, setLevel] = useState([0]);

  return (
    <section className="container my-10">
      <div className="flex max-md:flex-wrap gap-4">
        {/* Left Side */}
        <div className="w-full flex flex-col gap-4">
          <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex gap-4 items-center max-md:sticky max-md:top-4">
            <img src={Echo.image!} className={`rounded-xl w-32 aspect-square rarity-${rank[0]}`} />
            <div className="flex flex-col gap-3 w-full">
              <div className="flex max-md:flex-wrap gap-3 items-center">
                <h2 className="font-bold text-xl">{Echo.name}</h2>
                <Badge>{Echo.tier} Class</Badge>
                <Badge>Cost {Echo.cost}</Badge>
              </div>
              <div className="flex max-md:flex-wrap gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between font-bold">
                    <span>Rank</span><span>{rank[0]}</span>
                  </div>
                  <Slider min={2} max={5} step={1} value={rank} onValueChange={setRank} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between font-bold">
                    <span>Level</span><span>{level[0]}</span>
                  </div>
                  <Slider min={0} max={25} step={1} value={level} onValueChange={setLevel} />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-900 border border-zinc-700 flex flex-col overflow-clip">
            <div className="flex justify-between p-4 bg-zinc-800">
              <h2 className="font-bold text-xl">Echo Ability</h2>
              <p>Rank {rank[0]}</p>
            </div>
            <div
              className="p-4 weapon-skill"
              dangerouslySetInnerHTML={{ __html: Echo.ability[rank[0]! - 2]! }}
            />
          </div>

          <h4 className="font-bold text-lg mt-2">Possible Sonata Effect</h4>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,max-content))] gap-4">
            {
              Echo.sonatas.map((sonata, i) => (
                <div className="rounded-xl bg-zinc-900 border border-zinc-700 flex flex-col overflow-clip" key={i}>
                  <div className="flex p-4 gap-2 bg-zinc-800">
                    <img src={sonataEffects.find((set) => set.name === sonata)?.icon} className="w-7 aspect-square" />
                    <h2 className="font-bold text-xl">{sonata}</h2>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <p>2 Set: {sonataEffects.find((set) => set.name === sonata)?.partial}</p>
                    <p>5 Set: {sonataEffects.find((set) => set.name === sonata)?.full}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full flex flex-col gap-4">
          <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex flex-col gap-4">
            <h2 className="font-bold text-xl">All Possible Main Stats</h2>
            <div className="flex flex-col border border-zinc-700 rounded-xl">
              {
                getEchoMainStat(Echo.cost, rank[0]!).map((stat, i) => (
                  <div className="flex justify-between px-4 py-2 odd:bg-zinc-800 first:rounded-t-xl last:rounded-b-xl" key={i}>
                    <p className="flex items-center gap-2">
                      {stat.stat}
                      {stat.default && <Badge variant="secondary">Default</Badge>}
                    </p>
                    <p>
                      {
                        stat.default
                          ? Math.round((stat.startValue + (stat.step * level[0]!)))
                          : Math.round((stat.startValue + (stat.step * level[0]!)) * 10) / 10
                      }
                      {!stat.default && "%"}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex flex-col gap-4">
            <h2 className="font-bold text-xl">All Possible Sub Stats</h2>
            <div className="flex flex-col border border-zinc-700 rounded-xl">
              {
                EchoSubStat.map((stat, i) => (
                  <div className="flex justify-between px-4 py-2 odd:bg-zinc-800 first:rounded-t-xl last:rounded-b-xl" key={i}>
                    <p>{stat.stat}</p>
                    <p>
                      {stat.min}{!stat.flat && "%"}
                      <span className="mx-1">-</span>
                      {stat.max}{!stat.flat && "%"}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}