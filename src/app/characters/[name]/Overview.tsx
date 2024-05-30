import { StarFilledIcon } from "@radix-ui/react-icons";
import { Badge } from "~/components/ui/badge";
import { Slider } from "~/components/ui/slider";

export default function Overview() {
  return (
    <div className="border border-zinc-600 bg-zinc-800/75 backdrop-blur-lg rounded-xl">
      <div className="flex gap-2 min-h-[32rem]">
        <div className="flex flex-col gap-4 justify-between p-7 basis-2/3">
          {/* Overview */}
          <div>
            <div className="flex gap-4 items-end mb-2">
              <h1 className="font-bold text-4xl">{MockCharacter.name}</h1>
              <div className="flex gap-1 mb-1">
                {
                  Array.from({ length: MockCharacter.rarity }).map((_, i) => (
                    <StarFilledIcon className="w-5 h-5" key={i} />
                  ))
                }
              </div>
            </div>

            <div className="flex gap-2">
              <Badge>{MockCharacter.weapon}</Badge>
              <Badge>{MockCharacter.element}</Badge>
              <Badge>{MockCharacter.role}</Badge>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-2xl">Main Stat Lv. 1</h3>
            <div className="grid grid-cols-2 gap-2">
              {
                Object.entries(MockCharacter.stat).map(([stat, value], i) => (
                  <div className="flex rounded-full bg-zinc-600 justify-between py-1 px-4" key={i}>
                    <p className="uppercase">{stat.replaceAll("_", " ")}</p>
                    <p className="font-bold">{value}</p>
                  </div>
                ))
              }
            </div>
            <div className="flex gap-4 items-center mx-2 font-bold">
              <p className="text-nowrap">Lv. 1</p>
              <Slider />
              <p className="text-nowrap">Lv. 90</p>
            </div>
          </div>

          <div className="font-serif italic">{MockCharacter.introduction}</div>
        </div>

        <div className="basis-1/3 relative">
          <img
            src="/mock/kakarot_card.webp"
            className="scale-[120%] absolute right-[10%] bottom-[10%] select-none disable-drag"
          />
        </div>
      </div>
    </div>
  );
}

const MockCharacter = {
  id: 1,
  name: "Calcharo",
  introduction: `Leader of the "Ghost Hounds", an international mercenary group. Ruthless, vengeful, unforgiving. A potential client must be mindful of the price to pay before making him an offer.`,
  rarity: 5,
  element: "Electro",
  weapon: "Broadblade",
  role: "Main DPS",
  stat: {
    hp: 840,
    atk: 35,
    def: 97,
    max_energy: 125,
    crit_rate: 5,
    crit_dmg: 150,
    healing_bonus: 0,
    electro_dmg: 0,
  }
}