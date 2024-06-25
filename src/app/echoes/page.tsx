import { Separator } from "~/components/ui/separator";
import Filters from "./Filters";
import Link from "next/link";
import { fetchEchoes } from "./actions";
import { echoes } from "~/server/db/schema";
import { cn } from "~/lib/utils";
import { sonataEffects } from "~/constants/sonataEffects";

function EchoCard({
  echo,
}: {
  echo: typeof echoes.$inferSelect;
}) {
  return (
    <Link href={`/echoes/${echo.name}`} passHref>
      <div className="rounded-xl w-32 overflow-clip bg-zinc-800 border border-zinc-500 group">
        <div className={
          cn(
            "w-full aspect-square relative overflow-clip",
            `rarity-${echo.cost}`
          )
        }>
          <img src={echo.image!} className="bottom-0 absolute w-full group-hover:scale-110 transition-transform" />
          <div className="w-full h-full bg-zinc-900/30 relative group-hover:bg-zinc-900/0 transition" />
          <div className="w-6 flex flex-col gap-.5 absolute top-1 left-1">
            {
              echo.sonatas.map((sonata, i) => (
                <img key={i} src={sonataEffects.find((set) => set.name === sonata)?.icon} className="w-full aspect-square" />
              ))
            }
          </div>
        </div>
        <div className="p-2 font-bold text-sm">
          {echo.name}
        </div>
        <div className="p-2 text-zinc-300 text-xs -mt-3">
          {echo.tier}
        </div>
      </div>
    </Link>
  );
}

export default async function Echoes({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const echoesResponse = await fetchEchoes({
    q: searchParams.q as string ?? "",
    cost: searchParams.cost as "1" | "3" | "4" | "any" ?? "any",
    sonatas: (searchParams.sonatas as string)?.split(",") ?? [],
    tier: (searchParams.tier as string)?.split(",") as
      typeof echoes.tier.enumValues[number][] ?? [],
  });

  return (
    <main>
      <section className="container my-10">
        <div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">Echoes</h1>
            <Filters />
            <Separator className="my-6" />
            <div className="flex flex-wrap gap-4">
              {
                echoesResponse.map((echo, i) => (
                  <EchoCard echo={echo} key={i} />
                ))
              }
              {
                echoesResponse.length === 0 && (
                  <div className="text-zinc-400 text-center mx-auto">No echoes found</div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}