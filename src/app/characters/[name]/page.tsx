import BottomNav from "./BottomNav";
import BuildGuide from "./BuildGuide";
import Overview from "./Overview";

export default function CharacterOverview() {
  return (
    <main className="relative">
      <div
        className="bg-cover w-full h-screen bg-center absolute bg-blend-luminosity opacity-20 gradient-mask-b-20"
        style={{ backgroundImage: "url('/mock/kakarot_card.webp')" }}
      />

      <section className="max-xl:container px-48 mx-auto my-24 relative">
        <Overview />
      </section>

      <section className="container mx-auto my-10 relative">
        <BuildGuide />
      </section>

      <BottomNav />
    </main>
  );
}