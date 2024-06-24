"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

import { sonataEffects } from "~/constants/sonataEffects";
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
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-wrap gap-5 items-end">
        <div>
          <h4 className="font-bold mb-1">Search</h4>
          <Input
            placeholder="Input echo name"
            className="w-96"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              debounced("q", e.target.value);
            }} />
        </div>
        <div>
          <h4 className="font-bold mb-1">Costs</h4>
          <Select onValueChange={(e) => handleFilter("cost", e)}>
            <SelectTrigger>
              <SelectValue placeholder="Any" defaultValue={searchParams.get("cost") ?? "any"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1 Cost</SelectItem>
              <SelectItem value="3">3 Cost</SelectItem>
              <SelectItem value="4">4 Cost</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h4 className="font-bold mb-1">Sets</h4>
          <ToggleGroup
            type="multiple"
            className="gap-2"
            value={searchParams.get("sonatas")?.split(",") ?? []}
            onValueChange={(e) => handleFilter("sonatas", e)}>
            {sonataEffects.map((set, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <ToggleGroupItem value={set.name} className="p-0 flex flex-col">
                    <img src={set.icon} className={
                      cn(
                        "w-8 aspect-square transition",
                        searchParams.get("sonatas")?.split(",")
                          .find((sonata) => sonata === set.name)
                          ? "mix-blend-normal"
                          : "mix-blend-luminosity opacity-50 hover:opacity-100",
                      )
                    } />
                    {
                      searchParams.get("sonatas")?.split(",")
                        .find((sonata) => sonata === set.name) &&
                      <div className="w-1 rounded-full aspect-square bg-lime-500" />
                    }
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  {set.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </ToggleGroup>
        </div>
        <div>
          <h4 className="font-bold mb-1">Tier</h4>
          <ToggleGroup
            type="multiple"
            value={searchParams.get("tier")?.split(",") ?? []}
            onValueChange={(e) => handleFilter("tier", e)}
          >
            {EchoTier.map((echoTier, i) => (
              <ToggleGroupItem value={echoTier} key={i}>
                {echoTier}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <Button variant="destructive" onClick={handleReset}>
          Reset Filter
        </Button>
      </div>
    </TooltipProvider>
  );
}

const EchoTier = [
  "Calamity",
  "Overlord",
  "Elite",
  "Common",
];
