import { Badge } from "~/components/ui/badge";
import { Slider } from "~/components/ui/slider";

export default function EchoOverview() {
  return (
    <main>
      <section className="container my-10">
        <div className="flex max-md:flex-wrap gap-4">
          {/* Left Side */}
          <div className="w-full flex flex-col gap-4">
            <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex gap-4 items-center max-md:sticky max-md:top-4">
              <div className="rounded-xl w-32 aspect-square bg-zinc-200" />
              <div className="flex flex-col gap-3 w-full">
                <div className="flex max-md:flex-wrap gap-3 items-center">
                  <h2 className="font-bold text-xl">Sabyr Boar</h2>
                  <Badge>Common Class</Badge>
                  <Badge>Cost 1</Badge>
                </div>
                <div className="flex max-md:flex-wrap gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between font-bold">
                      <span>Rank</span><span>2</span>
                    </div>
                    <Slider min={2} max={5} step={1} />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between font-bold">
                      <span>Level</span><span>1</span>
                    </div>
                    <Slider min={1} max={25} step={1} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-zinc-900 border border-zinc-700 flex flex-col overflow-clip">
              <div className="flex justify-between p-4 bg-zinc-800">
                <h2 className="font-bold text-xl">Echo Ability</h2>
                <p>Rank 2</p>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p>
                  Summon a Sabyr Boar to headbutt the enemy into the air, dealing 32.00%+64 Physical DMG.
                </p>
                <p>CD: 8s</p>
              </div>
            </div>

            <h4 className="font-bold text-lg mt-2">Possible Sonata Effect</h4>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,max-content))] gap-2">
              {
                Array.from({ length: 3 }).map((set, i) => (
                  <div className="rounded-xl bg-zinc-900 border border-zinc-700 flex flex-col overflow-clip" key={i}>
                    <div className="flex p-4 bg-zinc-800">
                      <h2 className="font-bold text-xl">Echo Sets {i + 1}</h2>
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                      <p>2 Set: Energy Regen increases by 10%</p>
                      <p>5 Set: Upon using Outro Skill, ATK of the next Resonator increases by 22.5% for 15s.</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full flex flex-col gap-4">
            <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex flex-col gap-4">
              <h2 className="font-bold text-xl">All Possible Main Stats</h2>
              <div className="flex flex-col border border-zinc-700 rounded-xl">
                {
                  Array.from({ length: 4 }).map((stat, i) => (
                    <div className="flex justify-between px-4 py-2 odd:bg-zinc-800 first:rounded-t-xl last:rounded-b-xl" key={i}>
                      <p>HP</p> <p>245</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex flex-col gap-4">
              <h2 className="font-bold text-xl">All Possible Sub Stats</h2>
              <div className="flex flex-col border border-zinc-700 rounded-xl">
                {
                  Array.from({ length: 13 }).map((stat, i) => (
                    <div className="flex justify-between px-4 py-2 odd:bg-zinc-800 first:rounded-t-xl last:rounded-b-xl" key={i}>
                      <p>Resonance Liberation DMG Bonus</p> <p>245</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}