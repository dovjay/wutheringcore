import Link from "next/link";
import { cn } from "~/lib/utils";
import { characters } from "~/server/db/schema";
import { fetchCharacters } from "./actions";
import { CharacterElements } from "~/constants/characterElements";
import { WeaponTypes } from "~/constants/weaponType";

export function CharacterCard({
  character,
}: {
  character: typeof characters.$inferSelect;
}) {
  return (
    <Link href={`/characters/${character?.name}`} passHref>
      <div className={cn(
        "flex flex-col justify-end rounded-xl relative w-48 aspect-[3/4] bg-bottom bg-contain bg-no-repeat overflow-clip group",
        `rarity-${character?.rarity}`,
      )}>
        <img src={character?.imageProfile!} className="w-full absolute top-0 group-hover:scale-110 transition-transform" />
        <div className="w-full h-full absolute top-0 bg-zinc-900/20 hover:bg-zinc-900/10 transition"></div>

        <div className="w-7 aspect-square border border-zinc-100 bg-zinc-900 rounded-full absolute top-2 group-hover:top-10 left-2 transition-all">
          <img
            src={WeaponTypes.find(type => type.name === character?.weapon)?.icon}
            className="p-1"
          />
        </div>
        <div className="w-7 aspect-square bg-zinc-100 rounded-full absolute top-2 left-2">
          <img
            src={CharacterElements.find(char => char.element === character?.element)?.icon}
            className="scale-125"
          />
        </div>

        <div className="px-3 py-2 bg-zinc-900/70 backdrop-blur-sm relative">
          <p className="font-bold">{character?.name}</p>
          <p className="text-zinc-400">{character?.role}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function CharacterList({
  charactersResponse,
}: {
  charactersResponse: typeof characters.$inferSelect[]
}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Characters</h1>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,12rem)]">
        {
          charactersResponse.length === 0
            ? <p className="text-zinc-400">No characters found</p>
            : charactersResponse.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
        }
      </div>
    </div>
  );
}