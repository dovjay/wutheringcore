import { Separator } from "~/components/ui/separator";
import Filters from "./Filters";
import Tier from "./Tier";
import NextBanner from "./NextBanner";

export default function Tierlist() {
  return (
    <main>
      <section className="container mx-auto my-10">
        <NextBanner />
      </section>
      <section className="container mx-auto my-10">
        <div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">Tierlist Overview</h1>
            <Filters />
            <Separator className="my-6" />
            <Tier tier="SS" bgColor="bg-red-500" />
            <Tier tier="S" bgColor="bg-orange-500" />
            <Tier tier="A" bgColor="bg-yellow-500" />
            <Tier tier="B" bgColor="bg-lime-500" />
            <Tier tier="C" bgColor="bg-green-500" />
          </div>
        </div>
      </section>
    </main>
  )
}