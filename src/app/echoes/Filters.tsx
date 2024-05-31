import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function Filters() {
  return (
    <div className="flex flex-wrap gap-5 items-end">
      <div>
        <h4 className="font-bold mb-1">Search</h4>
        <Input placeholder="Input echo name" className="w-96" />
      </div>
      <div>
        <h4 className="font-bold mb-1">Costs</h4>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Any" defaultValue="any" />
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
        <ToggleGroup type="multiple">
          {EchoSets.map((set, i) => (
            <ToggleGroupItem value={set.name + i} key={i}>
              {set.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Class</h4>
        <ToggleGroup type="multiple">
          {EchoClass.map((echoClass, i) => (
            <ToggleGroupItem value={echoClass} key={i}>
              {echoClass}
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

const EchoClass = [
  "Calamity",
  "Overlord",
  "Elite",
  "Common",
];

const EchoSets = [
  {
    name: "Freezing Frost",
    setMin: "Glacio DMG increases by 10%.",
    setMax: "pon using Basic Attack or Heavy Attack, Glacio DMGincreases by 10%, stacking up to three times, lasting for 15s."
  },
  {
    name: "Freezing Frost",
    setMin: "Glacio DMG increases by 10%.",
    setMax: "pon using Basic Attack or Heavy Attack, Glacio DMGincreases by 10%, stacking up to three times, lasting for 15s."
  },
  {
    name: "Freezing Frost",
    setMin: "Glacio DMG increases by 10%.",
    setMax: "pon using Basic Attack or Heavy Attack, Glacio DMGincreases by 10%, stacking up to three times, lasting for 15s."
  },
]