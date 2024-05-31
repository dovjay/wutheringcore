import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

function SkillCard({
  skillStat = true
}: {
  skillStat?: boolean
}) {
  return (
    <div className="rounded-xl bg-zinc-700 overflow-clip">
      <div className="p-3 flex gap-4 bg-zinc-600 items-center">
        <div className="rounded-full w-10 aspect-square bg-zinc-300" />
        <p className="font-bold">Skill Name</p>
        <p>Skill type</p>
      </div>
      <p className="p-3">
        Quite long description for a skill that has nothing to do with the gameplay at all
      </p>
      {
        skillStat && (
          <div className="p-2 flex justify-center items-center">
            <Button variant="ghost">See More</Button>
          </div>
        )
      }
    </div>
  );
}

export default function CharacterProfile() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-6xl font-bold text-center">Character Profile</h1>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Skills</h2>

        <Tabs defaultValue="active" className="flex flex-col">
          <TabsList className="!bg-zinc-700 w-fit self-center">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="passive">Passive</TabsTrigger>
            <TabsTrigger value="concerto">Concerto</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2 data-[state=inactive]:hidden">
            {
              Array.from({ length: 4 }).map((_, i) => (
                <SkillCard key={i} />
              ))
            }
          </TabsContent>
          <TabsContent value="passive" className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2 data-[state=inactive]:hidden">
            {
              Array.from({ length: 3 }).map((_, i) => (
                <SkillCard key={i} />
              ))
            }
          </TabsContent>
          <TabsContent value="concerto" className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2 data-[state=inactive]:hidden">
            {
              Array.from({ length: 2 }).map((_, i) => (
                <SkillCard key={i} />
              ))
            }
          </TabsContent>
        </Tabs>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Resonance Chain (Dupes)</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2">
          {
            Array.from({ length: 6 }).map((_, i) => (
              <SkillCard skillStat={false} key={i} />
            ))
          }
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Minor Fortes (Total)</h2>

        <div className="flex gap-2">
          {
            Array.from({ length: 2 }).map((_, i) => (
              <div className="w-full flex gap-2 items-center bg-zinc-700 rounded-xl p-3 justify-between">
                <div className="flex gap-3 items-center">
                  <div className="w-8 aspect-square rounded-full bg-zinc-300" />
                  <span>CRIT DMG</span>
                </div>
                <p className="font-bold text-lime-300">16%</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Voice Actors</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(19rem,max-content))] gap-6">
          {
            Array.from({ length: 4 }).map((_, i) => (
              <div className="w-full flex gap-2 items-center bg-zinc-700 rounded-xl p-3 justify-between">
                <div className="flex gap-3 items-center">
                  <div className="w-8 aspect-square rounded-full bg-zinc-300" />
                  <span>JP</span>
                </div>
                <p className="font-bold text-lime-300">Himura Ishikawa</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}