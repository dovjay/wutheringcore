"use client"

import { ArrowDownIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { cn } from "~/lib/utils";
import { CharacterCard } from "../CharacterList";

function WeaponCard() {
  return (
    <div className="border border-zinc-600 rounded-xl overflow-clip min-w-40 group">
      <div
        // image mock
        className="w-full aspect-square bg-gradient-to-br from-yellow-400 to-yellow-700"
      />
      <div className="py-2 px-3 flex flex-col group-hover:bg-zinc-900">
        <div className="font-bold">Weapon Name</div>
        <div className="text-zinc-400 text-sm">Crit. DMG</div>
      </div>
    </div>
  );
}

export function MaterialCard({
  total,
  size = "lg",
}: {
  total: number;
  size?: "sm" | "lg";
}) {
  return (
    <div className={cn(
      "rounded-lg aspect-square bg-zinc-600 flex justify-end items-end p-1",
      size === "lg" && "lg:w-24 w-16",
      size === "sm" && "w-16",
    )}>
      <Badge>x{total}</Badge>
    </div>
  );
}

function AbilityCard() {
  return (
    <div className="flex flex-col items-center w-32">
      <div
        // mock ability image
        className="rounded-full w-20 aspect-square bg-zinc-600"
      />
      <div className="py-2 px-3 flex flex-col text-center">
        <div className="font-bold">Ability Name</div>
        <div className="text-zinc-400 text-sm">Skill Type</div>
      </div>
    </div>
  )
}

function EchoCard() {
  return (
    <div className="flex flex-col items-center w-24 aspect-square rounded-xl overflow-clip relative">
      <div
        // mock ability image
        className="w-full aspect-square bg-zinc-600 absolute"
      />
      <Badge className="absolute bottom-1 right-1" variant="secondary">Cost 4</Badge>
    </div>
  );
}

export default function BuildGuide() {
  const [materialBreakdown, setMaterialBreakdown] = useState(false);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-6xl font-bold text-center">Build Guide</h1>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Build Materials</h2>

        <div className="flex gap-4">
          <div className="flex gap-4 p-4 bg-zinc-700/50 rounded-xl">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Total Ascencion Materials</h3>
              <div className="flex gap-2 flex-wrap">
                {
                  Array.from({ length: 11 }).map((material, i) => (
                    <MaterialCard total={25} key={i} />
                  ))
                }
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-zinc-700/50 rounded-xl">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Total Skills Materials</h3>
              <div className="flex gap-2 flex-wrap">
                {
                  Array.from({ length: 11 }).map((material, i) => (
                    <MaterialCard total={25} key={i} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "flex-col p-4 bg-zinc-700/50 rounded-xl w-fit mx-auto",
          materialBreakdown ? "flex" : "hidden",
        )}>
          <h3 className="font-bold">Material Breakdown</h3>
          <Table>
            <TableCaption>All material breakdown per level</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="lg:min-w-24">Rank</TableHead>
                <TableHead className="lg:min-w-24">Lvl</TableHead>
                <TableHead className="lg:min-w-24">Cost</TableHead>
                <TableHead className="lg:min-w-24">Materials</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Array.from({ length: 6 }).map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{i * 20 + 1}</TableCell>
                    <TableCell>{(i + 1) * 20000}</TableCell>
                    <TableCell className="flex gap-1">
                      {
                        Array.from({ length: 4 }).map((material, i) => (
                          <MaterialCard size="sm" total={i * 10} key={i} />
                        ))
                      }
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>

        <Button className="w-fit mx-auto" variant="secondary" onClick={() => setMaterialBreakdown(!materialBreakdown)}>
          {materialBreakdown ? "Close" : "See"} Breakdown
        </Button>
      </div>

      <div className="min-w-48 border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-bold">Ability Priority</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 items-center justify-center flex-wrap">
          {
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                {i > 0 && <ArrowRightIcon className="w-10 h-10" />}
                <AbilityCard />
              </div>
            ))
          }
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-bold">Best Weapon</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {
            Array.from({ length: 10 }).map((_, i) => (
              <WeaponCard key={i} />
            ))
          }
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-bold">Echo Set</h2>

        <div className="flex gap-4 max-md:flex-col">
          {/* Statistic */}
          <div className="flex flex-col gap-4 bg-zinc-600/50 p-3 rounded-xl h-fit min-w-80">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Main Statistic</h3>
              <div className="flex flex-wrap gap-2">
                {
                  Array.from({ length: 3 }).map((_, i) => (
                    <div className="px-3 py-2 border border-zinc-500 rounded-xl">
                      <p className="text-sm text-zinc-400">Cost {4 - i}</p>
                      <p className="font-bold">Crit DMG/Rate</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Sub Statistic</h3>
              <div className="flex flex-wrap gap-2">
                {`Energy Regeneration (Until Breakpoint) >= CRIT RATE = CRIT DMG > ATK% > Flat ATK > Liberation DMG% > Basic DMG%`}
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Echo Passive Set</h3>
              <div className="flex flex-wrap gap-2">
                {
                  Array.from({ length: 3 }).map((_, i) => (
                    <div className="w-8 aspect-square bg-zinc-400 rounded-full" key={i} />
                  ))
                }
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-zinc-600/50 rounded-xl p-3 flex flex-col gap-3 w-fit">
              <h3 className="font-bold">Main Echo</h3>
              <div className="flex gap-2 flex-wrap pb-2">
                {
                  Array.from({ length: 3 }).map((_, i) => (
                    <EchoCard key={i} />
                  ))
                }
              </div>
            </div>

            <div className="bg-zinc-600/50 rounded-xl p-3 flex flex-col gap-3 w-fit">
              <h3 className="font-bold">Sub Echo</h3>
              <div className="flex gap-2 flex-wrap pb-2">
                {
                  Array.from({ length: 7 }).map((_, i) => (
                    <EchoCard key={i} />
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-bold">Synergies</h2>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {
            Array.from({ length: 4 }).map((_, i) => (
              <CharacterCard key={i} />
            ))
          }
        </div>
      </div>
    </div>
  );
}