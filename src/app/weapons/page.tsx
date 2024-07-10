import { Separator } from "~/components/ui/separator";
import Filters from "./Filters";
import { fetchWeapons } from "./actions";
import { weapons } from "~/server/db/schema";
import WeaponCard from "./WeaponCard";

export default async function Weapons({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const weaponsFilter = {
    q: searchParams.q as string ?? "",
    types: (searchParams.types as string)?.split(",") as
      typeof weapons.type.enumValues[number][] ?? [],
    rarity: (searchParams.rarity as string)?.split(",")?.map((Number)) ?? [],
  }

  const weaponResponse = await fetchWeapons(weaponsFilter);

  return (
    <main>
      <section className="container my-10">
        <div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">Weapons</h1>
            <Filters />
            <Separator className="my-6" />
            {
              weaponResponse.total === 0 && (
                <p className="text-center text-zinc-400">No weapons found</p>
              )
            }
            <div className="flex flex-wrap gap-4 items-start justify-center">
              {
                weaponResponse.data.map((weapon) => (
                  <WeaponCard key={weapon.id} weapon={weapon} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}