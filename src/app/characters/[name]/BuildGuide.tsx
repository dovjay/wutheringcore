"use client"

import { useContext, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { cn } from "~/lib/utils";
import { CharacterCard } from "../CharacterList";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { items } from "~/server/db/schema";
import { CharacterAscension, getTotalAscension } from "~/constants/characterAscension";
import { CharacterSkillMaterials } from "~/constants/characterSkillMaterials";
import { CharacterOverviewContext } from "~/contexts/CharacterOverviewContext";
import BuildGuideRole from "./BuildGuideRole";

export function MaterialCard({
  material,
  total,
  size = "lg",
}: {
  material: typeof items.$inferSelect;
  total: number;
  size?: "sm" | "lg";
}) {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "rounded-lg aspect-square flex justify-end items-end p-1 relative",
          size === "lg" && "lg:w-24 w-16",
          size === "sm" && "w-16",
          `rarity-${material?.rarity}`,
        )}>
        <img src={material?.image!} className="w-full p-2 aspect-square rounded-lg absolute top-0 left-0" />
        <Badge className="relative px-1.5">{total}</Badge>
      </PopoverTrigger>
      <PopoverContent>
        {material?.name}
      </PopoverContent>
    </Popover>
  );
}

export default function BuildGuide() {
  const { character, materials, synergies } = useContext(CharacterOverviewContext);

  const [materialBreakdown, setMaterialBreakdown] = useState(false);
  const [totalAscension, setTotalAscension] = useState(getTotalAscension());

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
                <MaterialCard
                  material={materials.find(material => material.name === character?.materials.overlord)!}
                  total={totalAscension.overlord}
                />
                <MaterialCard
                  material={materials.find(material => material.name === character?.materials.plant)!}
                  total={totalAscension.plant}
                />
                {
                  totalAscension.lesser.map((material, i) => (
                    <MaterialCard
                      material={materials.find(mat => mat.rarity === material.rarity && mat.name.includes(character?.materials?.lesser!))!}
                      total={material.amount}
                      key={i}
                    />
                  ))
                }
                <MaterialCard
                  material={materials.find(material => material.name === "Shell Credit")!}
                  total={totalAscension.credit}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-zinc-700/50 rounded-xl">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Total Skills Materials</h3>
              <div className="flex gap-2 flex-wrap">
                {
                  CharacterSkillMaterials.map((material, i) => {
                    if (i < CharacterSkillMaterials.length - 1) {
                      return (
                        <MaterialCard
                          material={materials.find(mat => mat.rarity === material.rarity && mat.name.includes((character?.materials as any)[material.type]))!}
                          total={material.value}
                          key={i}
                        />
                      )
                    }

                    return (
                      <MaterialCard
                        material={materials.find(mat => mat.rarity === material.rarity && mat.name.includes("Shell Credit"))!}
                        total={material.value}
                        key={i}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "flex-col p-4 bg-zinc-700/50 rounded-xl w-fit mx-auto",
          materialBreakdown ? "flex" : "hidden",
        )}>
          <h3 className="font-bold">Ascensions Material Breakdown</h3>
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
                CharacterAscension.map((material, i) => (
                  <TableRow key={i}>
                    <TableCell>{material.ascension}</TableCell>
                    <TableCell>{material.maxLevel}</TableCell>
                    <TableCell>{material.credit}</TableCell>
                    <TableCell className="flex gap-1">
                      {
                        material.lesser > 0 && (
                          <MaterialCard
                            size="sm"
                            material={materials.find(mat => mat.rarity === material.lesserRarity && mat.name.includes(character?.materials?.lesser!))!}
                            total={material.lesser}
                          />
                        )
                      }
                      {
                        material.plant > 0 && (
                          <MaterialCard
                            size="sm"
                            material={materials.find(mat => mat.name.includes(character?.materials?.plant!))!}
                            total={material.plant}
                          />
                        )
                      }
                      {
                        material.overlord > 0 && (
                          <MaterialCard
                            size="sm"
                            material={materials.find(mat => mat.name.includes(character?.materials?.overlord!))!}
                            total={material.overlord}
                          />
                        )
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

      <BuildGuideRole />

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-bold">Synergies</h2>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {
            synergies.map((character, i) => (
              <CharacterCard character={character} key={i} />
            ))
          }
        </div>
      </div>
    </div >
  );
}