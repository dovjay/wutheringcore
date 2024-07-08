import { EqualIcon } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import { WeaponCard } from "~/app/weapons/page";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { getSonataEffect } from "~/constants/sonataEffects";
import { CharacterOverviewContext } from "~/contexts/CharacterOverviewContext";
import { useGetCharacterSkill } from "~/hooks/useGetCharacterSkill";
import { characterBuild, characters, echoes } from "~/server/db/schema";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "~/components/ui/skeleton";

export function AbilityCard({
  skills,
  ability
}: {
  skills: typeof characters.skills._.data;
  ability: typeof characterBuild.abilityPriority._.data[0];
}) {
  const { skill } = useGetCharacterSkill(skills, ability.name);

  return (
    <div className="flex flex-col items-center w-32">
      <img
        src={skill?.icon}
        className="rounded-full w-20 aspect-square bg-zinc-800 p-2"
      />
      <div className="py-2 px-3 flex flex-col text-center">
        <div className="font-bold text-sm text-nowrap">{skill?.name}</div>
        <div className="text-zinc-400 text-xs">{ability.name}</div>
      </div>
    </div>
  )
}

export function EchoCard({
  echo,
}: {
  echo: typeof echoes.$inferSelect;
}) {
  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger className="flex flex-col items-center w-16 aspect-square rounded-xl overflow-clip relative">
        <Link href={`/echoes/${echo.name}`}>
          <img
            src={echo.image!}
            className={"w-full aspect-square" + ` rarity-${echo.cost}`}
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{echo.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function BuildGuideRole() {
  const { character, builds } = useContext(CharacterOverviewContext);
  const [role, setRole] = useState(builds[0]?.buildName ?? "");

  const {
    data: bestWeapons,
    isLoading: isLoadingBestWeapons,
    isSuccess: isSuccessBestWeapons,
  } = useQuery<[], Error>({
    queryKey: ["build-weapons", role],
    queryFn: async () => {
      const buildIndex = builds.findIndex((build) => build.buildName === role);

      const bestWeaponsUrl = encodeURI(`/api/build-weapons?best-weapons=${encodeURIComponent(builds[buildIndex]?.bestWeapons.join(",")!)}`);
      const res = await fetch(bestWeaponsUrl);
      const { data } = await res.json();
      return data;
    },
    initialData: []
  })

  const {
    data: bestEchoes,
    isLoading: isLoadingBestEchoes,
    isSuccess: isSuccessBestEchoes,
  } = useQuery<{
    mainEchoes: typeof echoes.$inferSelect[];
    subEchoes: typeof echoes.$inferSelect[];
  }, Error>({
    queryKey: ["build-echoes", role],
    queryFn: async () => {
      const buildIndex = builds.findIndex((build) => build.buildName === role);
      const { mainEchoes, subEchoes, sonataCombination } = builds[buildIndex]!;
      const params = new URLSearchParams();
      if (mainEchoes.length > 0) params.set("main-echoes", mainEchoes.join(","));
      if (subEchoes.length > 0) params.set("sub-echoes", subEchoes.join(","));
      if (sonataCombination.length > 0) params.set("sonatas", sonataCombination.join(","));
      const bestEchoesUrl = `/api/build-echoes?${params.toString()}`;
      const res = await fetch(bestEchoesUrl);
      const { data } = await res.json();
      return data;
    },
    initialData: {
      mainEchoes: [],
      subEchoes: []
    }
  })

  return (
    <TooltipProvider>
      <div className="border border-zinc-600 bg-zinc-900 p-4 rounded-xl flex flex-col gap-4">
        <Tabs defaultValue={builds[0]?.buildName} onValueChange={setRole}>
          <div className="w-full flex justify-center items-center p-4">
            <TabsList>
              {builds.map((build, i) => (
                <TabsTrigger value={build.buildName} key={i}>{build.buildName}</TabsTrigger>
              ))}
            </TabsList>
          </div>
          {builds.map((build, i) => (
            <TabsContent value={build.buildName} className="flex flex-col gap-4" key={i}>
              <div className="min-w-48 border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
                <h2 className="text-xl font-bold">Ability Priority</h2>
                <div className="flex gap-4 overflow-x-auto pb-2 items-center justify-center flex-wrap">
                  {
                    build.abilityPriority.map((ability, i) => (
                      <>
                        {
                          i > 0
                            ? ability.equalNext
                              ? <EqualIcon className="w-10 h-10" />
                              : <ArrowRightIcon className="w-10 h-10" />
                            : null
                        }
                        <AbilityCard key={i} skills={character?.skills!} ability={ability} />
                      </>
                    ))
                  }
                </div>
              </div>

              <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
                <h2 className="text-xl font-bold">Best Weapon</h2>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {
                    isLoadingBestWeapons && <>
                      <Skeleton className="w-40 h-56" />
                      <Skeleton className="w-40 h-56" />
                    </>
                  }
                  {
                    isSuccessBestWeapons && (
                      bestWeapons.map((weapon, i) => (
                        <WeaponCard weapon={weapon} key={i} />
                      ))
                    )
                  }
                </div>
              </div>

              <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
                <h2 className="text-xl font-bold">Echo Set</h2>

                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  {/* Stats */}
                  <div className="flex flex-col gap-4 bg-zinc-800 p-3 rounded-xl h-fit min-w-80">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">Main Stats</h3>
                      <div className="flex flex-wrap gap-3">
                        {
                          build.mainStats.map((stat, i) => (
                            <div className="px-3 py-2 bg-zinc-700 rounded-xl min-w-36" key={i}>
                              <p className="text-sm text-zinc-300">Cost {stat.cost}</p>
                              <p className="font-bold">{stat.stats.join("/")}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">Sub Stats</h3>
                      <div className="flex flex-wrap gap-2">
                        {build.subStats}
                      </div>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">Sonata Effect</h3>
                      <div className="flex flex-wrap gap-2">
                        {build.sonataCombination.map((sonata, i) => (
                          <Tooltip key={i}>
                            <TooltipTrigger>
                              <img
                                src={getSonataEffect(sonata)?.icon}
                                className="w-8 h-8"
                              />
                            </TooltipTrigger>
                            <TooltipContent className="text-sm max-w-sm gap-2 flex flex-col">
                              <p className="font-bold text-md">{getSonataEffect(sonata)?.name}</p>
                              <Separator />
                              <p>2 set: {getSonataEffect(sonata)?.partial}</p>
                              <p>5 set: {getSonataEffect(sonata)?.full}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="bg-zinc-800 rounded-xl p-3 flex flex-col gap-3 w-full">
                      <h3 className="font-bold">Main Echoes</h3>
                      <div className="flex gap-2 flex-wrap pb-2">
                        {
                          isLoadingBestEchoes && <>
                            <Skeleton className="w-16 aspect-square" />
                            <Skeleton className="w-16 aspect-square" />
                          </>
                        }
                        {
                          isSuccessBestEchoes && (
                            bestEchoes?.mainEchoes.map((echo, i) => (
                              <EchoCard echo={echo} key={i} />
                            ))
                          )
                        }
                      </div>
                    </div>

                    <div className="bg-zinc-800 rounded-xl p-3 flex flex-col gap-3 w-full">
                      <h3 className="font-bold">Sub Echoes</h3>
                      <div className="flex gap-2 flex-wrap pb-2">
                        {
                          isLoadingBestEchoes && <>
                            <Skeleton className="w-16 aspect-square" />
                            <Skeleton className="w-96 h-16" />
                            <Skeleton className="w-16 aspect-square" />
                            <Skeleton className="w-16 aspect-square" />
                          </>
                        }
                        {
                          isSuccessBestEchoes && (
                            bestEchoes?.subEchoes.map((echo, i) => (
                              <EchoCard echo={echo} key={i} />
                            ))
                          )
                        }
                      </div>
                      {
                        isSuccessBestEchoes && (
                          bestEchoes?.subEchoes.length! > 0 &&
                          <Button asChild variant="link">
                            <Link href={`/echoes?sonatas=${build.sonataCombination.join(",")}`}>
                              See More
                            </Link>
                          </Button>
                        )
                      }
                    </div>
                  </div>

                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </TooltipProvider>
  );
}