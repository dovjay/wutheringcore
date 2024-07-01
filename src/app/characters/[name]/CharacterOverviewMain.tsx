"use client";

import { useState } from "react";
import { OverviewTab, TabContext } from "~/contexts/CharacterTabContext";
import Overview from "./Overview";
import BuildGuide from "./BuildGuide";
import CharacterProfile from "./CharacterProfile";
import Review from "./Review";
import BottomNav from "./BottomNav";
import { CharacterOverview, CharacterOverviewContext } from "~/contexts/CharacterOverviewContext";

export default function CharacterOverviewMain({
  data,
}: {
  data: CharacterOverview;
}) {
  const { character } = data;
  const [openTab, setOpenTab] = useState(OverviewTab.Build);

  if (!data) {
    return (
      <main>
        <div className="container my-10">
          <h1 className="text-5xl font-bold">Character Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <CharacterOverviewContext.Provider value={data}>
      <TabContext.Provider value={{ openTab, setOpenTab }}>
        <main className="relative">
          <div
            className="bg-cover w-full h-screen bg-center absolute bg-blend-luminosity opacity-20 gradient-mask-b-20"
            style={{ backgroundImage: `url('${character?.imageProfile}')` }}
          />

          <section className="max-xl:container px-48 py-32 relative">
            <Overview />
          </section>

          <section className="container my-10 relative">
            {openTab === OverviewTab.Build && <BuildGuide />}
            {openTab === OverviewTab.Profile && <CharacterProfile />}
            {openTab === OverviewTab.Review && <Review />}
          </section>

          <BottomNav />
        </main>
      </TabContext.Provider>
    </CharacterOverviewContext.Provider>
  );
}