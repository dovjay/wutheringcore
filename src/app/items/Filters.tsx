"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import useFilter from "~/hooks/useFilter";

export default function Filters({ itemTypes, }: { itemTypes: string[] }) {
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
          placeholder="Input item name"
          value={search}
          className="w-96"
          onChange={(e) => {
            setSearch(e.target.value);
            debounced("q", e.target.value);
          }}
        />
      </div>

      <div>
        <h4 className="font-bold mb-1">Type</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("types")?.split(",") ?? []}
          onValueChange={(value) => handleFilter("types", value)}
        >
          {itemTypes.map((type, i) => (
            <ToggleGroupItem value={type as string} key={i}>
              {type}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div>
        <h4 className="font-bold mb-1">Rarity</h4>
        <ToggleGroup
          type="multiple"
          value={searchParams.get("rarity")?.split(",") ?? []}
          onValueChange={(value) => handleFilter("rarity", value)}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <ToggleGroupItem value={String(i + 1)} key={i} className="flex items-center gap-1">
              {i + 1} <StarFilledIcon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Button variant="destructive" onClick={handleReset}>
        Reset Filter
      </Button>
    </div>
  );
};
