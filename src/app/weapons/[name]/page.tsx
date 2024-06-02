import { StarFilledIcon } from "@radix-ui/react-icons";
import { Badge } from "~/components/ui/badge";
import { Slider } from "~/components/ui/slider";

import { MaterialCard } from "~/app/characters/[name]/BuildGuide";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Separator } from "~/components/ui/separator";

export default function WeaponOverview() {
  return (
    <main>
      <section className="container my-10">
        <div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold">Weapon Overview</h1>
            <div className="flex max-md:flex-wrap gap-4">
              {/* Left Side */}
              <div className="w-full flex flex-col gap-4">
                <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700 flex gap-4 items-center max-md:sticky max-md:top-4">
                  <div className="rounded-xl w-32 aspect-square bg-zinc-200" />
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex max-md:flex-wrap gap-3 items-center">
                      <h2 className="font-bold text-xl">Abyss Surge</h2>
                      <Badge variant="outline">Pistols</Badge>
                      <Badge variant="outline">5 <StarFilledIcon /></Badge>
                    </div>
                    <div className="flex gap-4 text-sm items-center">
                      <div className="flex gap-2">
                        <h4>ATK</h4>
                        <p className="font-bold">125</p>
                      </div>
                      <Separator orientation="vertical" className="h-5" />
                      <div className="flex gap-2">
                        <h4>CRIT RATE</h4>
                        <p className="font-bold">25%</p>
                      </div>
                    </div>
                    <div className="flex max-md:flex-wrap gap-4">
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex justify-between font-bold">
                          <span>Rank</span><span>1</span>
                        </div>
                        <Slider min={1} max={5} step={1} />
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

                <div className="flex flex-col gap-1 p-4 bg-zinc-900 border border-zinc-700 rounded-xl">
                  <h2 className="font-bold text-lg">Stormy Resolution</h2>
                  <p>
                    Increases Energy Regen by 12.8%. When Resonance Skill is released, increases ATK by 6%, stacking up to 2 time(s). This effect lasts for 10s.
                  </p>
                  <Separator className="my-4" />
                  <p className="font-serif italic text-sm">
                    Pay heed: the frigid blade reveals an icy current that amalgamates into a whirlpool of thoughts. Use this powerful sequence to crush your enemies with ease using the Sword.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full flex flex-col gap-4">
                <div className="flex gap-4 p-4 bg-zinc-900 border border-zinc-700 rounded-xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold">Total Ascencion Materials</h3>
                    <div className="flex gap-2 flex-wrap">
                      {
                        Array.from({ length: 11 }).map((material, i) => (
                          <MaterialCard size="sm" total={25} key={i} />
                        ))
                      }
                    </div>
                  </div>
                </div>

                <div className="flex-col p-4 bg-zinc-900 border border-zinc-700 rounded-xl w-full flex">
                  <h3 className="font-bold">Material Breakdown</h3>
                  <Table>
                    <TableCaption>All material breakdown per level</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="lg:min-w-24">Ascension</TableHead>
                        <TableHead className="lg:min-w-24">Lvl</TableHead>
                        <TableHead className="lg:min-w-24">Cost</TableHead>
                        <TableHead className="lg:min-w-24">Materials</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {
                        Array.from({ length: 6 }).map((row, i) => (
                          <TableRow key={i}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>{i * 20 + 1}</TableCell>
                            <TableCell>{(i + 1) * 20000}</TableCell>
                            <TableCell className="flex gap-1">
                              {
                                Array.from({ length: 4 }).map((material, i) => (
                                  <MaterialCard size="sm" total={i * 10} key={i} />
                                ))
                              }
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}