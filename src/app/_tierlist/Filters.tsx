"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { CharacterElements } from "~/constants/characterElements";
import { WeaponTypes } from "~/constants/weaponType";
import useFilter from "~/hooks/useFilter";
import { cn } from "~/lib/utils";

export default function Filters() {
  const searchParams = useSearchParams();
  const {
    search,
    setSearch,
    debounced,
    handleFilter,
    handleReset
  } = useFilter();

  return (
    <div className="flex flex-wrap gap-5 items-end">
      <div>
        <h4 className="font-bold mb-1">Search</h4>
        <Input
          placeholder="Input character name"
          className="w-64"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            debounced("q", e.target.value);
          }}
        />
      </div>
      <div>
        <h4 className="font-bold mb-1">Role</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("roles")?.split(",") ?? []}
          onValueChange={(e) => handleFilter("roles", e)}
        >
          {Role.map((role, i) => (
            <ToggleGroupItem value={role.value} key={i}>
              {role.text}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Weapon</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("weapons")?.split(",") ?? []}
          onValueChange={(e) => handleFilter("weapons", e)}
          className="w-fit"
        >
          {WeaponTypes.map((type, i) => (
            <ToggleGroupItem value={type.name} key={i} className={
              cn(
                "flex items-center gap-1 opacity-50 hover:opacity-100 p-1",
                searchParams.get("weapons")?.split(",").includes(type.name) && "opacity-100",
              )
            }>
              <img
                src={type.icon}
                className="w-8 aspect-square"
              />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Element</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("elements")?.split(",") ?? []}
          onValueChange={(e) => handleFilter("elements", e)}
          className="flex-wrap gap-3 justify-start"
        >
          {CharacterElements.map((element, i) => (
            <ToggleGroupItem value={element.element} key={i} className={
              cn(
                "flex items-center gap-1 mix-blend-luminosity opacity-50 hover:opacity-100 p-1",
                searchParams.get("elements")?.split(",").includes(element.element) && "opacity-100 mix-blend-normal",
              )
            }>
              <img
                src={element.icon}
                className="w-8 aspect-square"
              />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Rarity</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("rarity")?.split(",") ?? []}
          onValueChange={(e) => handleFilter("rarity", e)}
          className="w-fit"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <ToggleGroupItem value={String(i + 4)} key={i} className="flex items-center gap-1">
              {i + 4} <StarFilledIcon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Button variant="destructive" onClick={handleReset}>
        Reset Filter
      </Button>
    </div>
  )
}

const Role = [
  {
    value: "dps",
    text: "Main DPS",
  },
  {
    value: "hybrid",
    text: "Hybrid",
  },
  {
    value: "support",
    text: "Support",
  },
];

const Element = [
  {
    value: "aero",
    text: "Aero",
  },
  {
    value: "fusion",
    text: "Fusion",
  },
  {
    value: "spectro",
    text: "Spectro",
  },
  {
    value: "glacio",
    text: "Glacio",
  },
  {
    value: "havoc",
    text: "Havoc",
  },
  {
    value: "electro",
    text: "Electro",
  },
];

const Weapon = [
  {
    value: "sword",
    text: "Sword",
  },
  {
    value: "broadblade",
    text: "Broadblade",
  },
  {
    value: "pistols",
    text: "Pistols",
  },
  {
    value: "gauntlets",
    text: "Gauntlets",
  },
  {
    value: "rectifier",
    text: "Rectifier",
  },
];

const Rarity = [
  {
    value: "4",
    text: "4 Stars",
  },
  {
    value: "5",
    text: "5 Stars",
  },
];