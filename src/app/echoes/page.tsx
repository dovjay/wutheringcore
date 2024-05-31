import { Separator } from "~/components/ui/separator";
import Filters from "./Filters";
import Link from "next/link";

function EchoCard() {
  return (
    <Link href="/echoes/sabyr-boar" passHref>
      <div className="rounded-xl w-32 overflow-clip bg-zinc-700 border border-zinc-500 group">
        <div className="w-full aspect-square bg-gradient-to-br from-green-400 to-green-500 relative overflow-clip">
          <img src="/mock/sabyrboar.png" className="absolute w-full group-hover:scale-110 transition-transform" />
          <div className="w-full h-full bg-zinc-900/20 relative group-hover:bg-zinc-900/0 transition" />
          <div
            className="w-6 h-6 bg-blue-500 rounded-full absolute left-1 top-[3.75rem]"
          />
          <div
            className="w-6 h-6 bg-red-500 rounded-full absolute left-1 top-8"
          />
          <div
            className="w-6 h-6 bg-zinc-100 rounded-full absolute left-1 top-1"
          />
          <div
            className="w-6 h-6 bg-zinc-100/80 backdrop-blur rounded-full absolute right-1 top-1 flex justify-center items-center">
            <span className="font-bold text-zinc-950">1</span>
          </div>
        </div>
        <div className="p-2 font-bold">
          Sabyr Boar
        </div>
      </div>
    </Link>
  );
}

export default function Echoes() {
  return (
    <main>
      <section className="container mx-auto my-10">
        <div className="border border-zinc-700 bg-zinc-800 p-6 rounded-xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">Echoes</h1>
            <Filters />
            <Separator className="my-6" />
            <div className="flex flex-wrap gap-4">
              {
                Array.from({ length: 58 }).map((_, i) => (
                  <EchoCard key={i} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}