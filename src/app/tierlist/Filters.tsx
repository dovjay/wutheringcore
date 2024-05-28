import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function Filters() {
  return (
    <div className="flex flex-wrap gap-5 items-end">
      <div>
        <h4 className="font-bold mb-1">Search</h4>
        <Input placeholder="Input character name" className="w-96" />
      </div>
      <div>
        <h4 className="font-bold mb-1">Role</h4>
        <ToggleGroup type="multiple">
          {Role.map((role, i) => (
            <ToggleGroupItem value={role.value} key={i}>
              {role.text}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Weapon</h4>
        <ToggleGroup type="multiple">
          {Weapon.map((weapon, i) => (
            <ToggleGroupItem value={weapon.value} key={i}>
              {weapon.text}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Element</h4>
        <ToggleGroup type="multiple">
          {Element.map((element, i) => (
            <ToggleGroupItem value={element.value} key={i}>
              {element.text}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div>
        <h4 className="font-bold mb-1">Rarity</h4>
        <ToggleGroup type="multiple">
          {Rarity.map((rarity, i) => (
            <ToggleGroupItem value={rarity.value} key={i}>
              {rarity.text}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Button variant="destructive">
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