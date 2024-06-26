"use client";

import { useState } from "react";
import BottomNav from "./BottomNav";
import BuildGuide from "./BuildGuide";
import Overview from "./Overview";
import CharacterProfile from "./CharacterProfile";
import Review from "./Review";
import { OverviewTab, TabContext } from "~/contexts/CharacterTabContext";

export default function CharacterOverview() {
  const [openTab, setOpenTab] = useState(OverviewTab.Build);

  return (
    <TabContext.Provider value={{ openTab, setOpenTab }}>
      <main className="relative">
        <div
          className="bg-cover w-full h-screen bg-center absolute bg-blend-luminosity opacity-20 gradient-mask-b-20"
          style={{ backgroundImage: "url('/mock/kakarot_card.webp')" }}
        />

        <section className="max-xl:container px-48 my-24 relative">
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
  );
}
