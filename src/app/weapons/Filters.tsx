import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function Filters() {
  return (
    <div className="flex flex-wrap gap-5 items-end">
      <div>
        <h4 className="font-bold mb-1">Search</h4>
        <Input placeholder="Input weapon name" className="w-96" />
      </div>
      <div>
        <h4 className="font-bold mb-1">Rarity</h4>
        <ToggleGroup type="multiple">
          {Array.from({ length: 5 }).map((_, i) => (
            <ToggleGroupItem value={String(i + 1)} key={i} className="flex items-center gap-1">
              {i + 1} <StarFilledIcon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Type</h4>
        <ToggleGroup type="multiple">
          {Type.map((type, i) => (
            <ToggleGroupItem value={type.name} key={i}>
              {type.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Button variant="destructive">
        Reset Filter
      </Button>
    </div>
  );
}

const Type = [
  {
    name: "Broadblade",
    icon: "/",
  },
  {
    name: "Sword",
    icon: "/",
  },
  {
    name: "Pistols",
    icon: "/",
  },
  {
    name: "Gauntlets",
    icon: "/",
  },
  {
    name: "Rectifier",
    icon: "/",
  },
];