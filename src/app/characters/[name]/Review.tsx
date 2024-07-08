import { useContext } from "react";
import { CharacterOverviewContext } from "~/contexts/CharacterOverviewContext";
import DamageChart from "./DamageChart";

export default function Review() {
  const { character } = useContext(CharacterOverviewContext);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-6xl font-bold text-center">Review</h1>

      <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto">
        <h2 className="text-xl font-bold">Quick Summary</h2>

        <div
          className="flex flex-col gap-5"
          dangerouslySetInnerHTML={{ __html: character?.quickSummary! }}
        />
        <div className="italic">~ Excerp from prydwen.gg</div>
      </div>

      <div className="flex gap-4 max-md:flex-col">
        <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4 overflow-x-auto w-full">
          <h2 className="text-xl font-bold">Pros & Cons</h2>

          <div className="flex gap-2 flex-col">
            <div className="p-3 bg-zinc-800 rounded-xl w-full">
              <h3 className="font-bold text-lg">Pros</h3>
              <ul className="list-disc list-outside ml-4">
                {character?.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-zinc-800 rounded-xl w-full">
              <h3 className="font-bold text-lg">Cons</h3>
              <ul className="list-disc list-outside ml-4">
                {character?.cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-zinc-600 bg-zinc-900 p-5 rounded-xl flex flex-col gap-4">
          <h2 className="text-xl font-bold">Damage Profile</h2>

          <div className="w-96 mx-auto">
            <DamageChart />
          </div>
        </div>
      </div>
    </div>
  );
}