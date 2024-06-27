import { characters } from "~/server/db/schema";
import { fetchCharacters } from "./actions";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

export default async function Characters({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data } = await fetchCharacters({
    q: searchParams.q as string ?? "",
    rarity: (searchParams.rarity as string)?.split(",")?.map((Number)) ?? [],
    element: (searchParams.elements as string)?.split(",") as typeof characters.element.enumValues[number][] ?? [],
    weapon: (searchParams.weapons as string)?.split(",") as typeof characters.weapon.enumValues[number][] ?? [],
  });

  return (
    <main>
      <section className="container my-10">
        <div className="flex gap-4">
          <Filters />
          <CharacterList charactersResponse={data} />
        </div>
      </section>
    </main>
  )
}