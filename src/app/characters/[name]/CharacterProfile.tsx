import { Mic2Icon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { getStatIcon } from "~/constants/statIcons";
import { CharacterOverviewContext } from "~/contexts/CharacterOverviewContext";
import { cn } from "~/lib/utils";
import { characters } from "~/server/db/schema";

function SkillCard({
  skill,
}: {
  skill: typeof characters.skills._.data.activeSkill[0];
}) {
  const { character } = useContext(CharacterOverviewContext);
  const [level, setLevel] = useState([1]);

  return (
    <div className="rounded-xl bg-zinc-800 overflow-clip h-fit">
      <div className="p-3 flex gap-4 bg-zinc-700 items-center">
        <img
          src={skill?.icon!}
          className="rounded-full w-10 aspect-square"
        />
        <div className="flex flex-col">
          <p className="font-bold">{skill?.name}</p>
          <p className="text-zinc-400 text-sm">{skill?.type}</p>
        </div>
      </div>
      <p
        className={cn("p-3 character-skill", character?.element)}
        dangerouslySetInnerHTML={{ __html: skill?.description }}
      />
      {
        skill?.multiplier && (
          <Accordion type="single" collapsible>
            <AccordionItem value="multiplier" className="border-0 px-4 py-2">
              <AccordionTrigger className="hover:no-underline">See More</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5 my-2">
                <div className="flex gap-3">
                  <p className="text-nowrap font-bold">Lv. {level[0]}</p>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={level}
                    onValueChange={setLevel}
                  />
                </div>
                <div className="rounded-lg overflow-clip border border-zinc-700">
                  {
                    skill.multiplier.map((m, i) => (
                      <div key={i} className="flex justify-between px-4 py-3 odd:bg-zinc-700 gap-4">
                        <p>{m.Name}</p>
                        <p className="text-yellow-500 font-bold">{(m as any)[`Lv${level[0]}`]}</p>
                      </div>
                    ))
                  }
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      }
    </div>
  );
}

export default function CharacterProfile() {
  const { character } = useContext(CharacterOverviewContext);

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
          <TabsContent value="active" className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2">
            {
              character?.skills.activeSkill.map((skill, i) => (
                <SkillCard skill={skill} key={i} />
              ))
            }
          </TabsContent>
          <TabsContent value="passive" className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2">
            {
              character?.skills.passiveSkill.map((skill, i) => (
                <SkillCard skill={skill} key={i} />
              ))
            }
          </TabsContent>
          <TabsContent value="concerto" className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2">
            {
              character?.skills.concertoSkill.map((skill, i) => (
                <SkillCard skill={skill} key={i} />
              ))
            }
          </TabsContent>
        </Tabs>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Sequences (Dupes)</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,max-content))] gap-2">
          {
            character?.sequences.map((sequence, i) => (
              <SkillCard skill={{ ...sequence, type: `Sequence ${i + 1}`, multiplier: null }} key={i} />
            ))
          }
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Minor Fortes (Total)</h2>

        <div className="flex gap-2">
          {
            character?.minorFortes.map((forte, i) => (
              <div className="w-full flex gap-2 items-center bg-zinc-700 rounded-xl p-3 justify-between" key={i}>
                <div className="flex gap-3 items-center">
                  <img src={getStatIcon(forte.stat)} className="w-7 aspect-square" />
                  <span>{forte.stat}</span>
                </div>
                <p className="font-bold text-lime-300">{forte.value}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Voice Actors</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(19rem,max-content))] gap-6">
          {
            character?.voiceActors.map((va, i) => (
              <div className="w-full flex gap-2 items-center bg-zinc-700 rounded-xl p-3 justify-between" key={i}>
                <div className="flex gap-3 items-center">
                  <Mic2Icon />
                  <span>{va.lang}</span>
                </div>
                <p className="font-bold text-lime-300">{va.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}