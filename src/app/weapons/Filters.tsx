"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { weaponTypes } from "~/constants/weaponType";
import useFilter from "~/hooks/useFilter";

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
          placeholder="Input weapon name"
          className="w-96"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            debounced("q", e.target.value);
          }}
        />
      </div>
      <div>
        <h4 className="font-bold mb-1">Rarity</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("rarity")?.split(",") ?? []}
          onValueChange={(e) => handleFilter("rarity", e)}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <ToggleGroupItem value={String(i + 1)} key={i} className="flex items-center gap-1">
              {i + 1} <StarFilledIcon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Type</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("types")?.split(",") ?? []}
          onValueChange={(e) => handleFilter("types", e)}
        >
          {weaponTypes.map((type, i) => (
            <ToggleGroupItem value={type.name} key={i}>
              {type.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Button variant="destructive" onClick={handleReset}>
        Reset Filter
      </Button>
    </div>
  );
}