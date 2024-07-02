export const sonataEffects = [
  {
    name: "Rejuvenating Glow",
    partial: "Healing increases by 10%",
    full: "Upon healing allies, increase ATK of the entire team by 15%, lasting 30s",
    icon: "/images/sonatas/Rejuvenating-Glow.webp",
  },
  {
    name: "Molten Rift",
    partial: "Fusion DMG increases by 10%",
    full: "Upon using Resonance Skill, Fusion DMG increases by 30% for 15s",
    icon: "/images/sonatas/molten-rift.webp",
  },
  {
    name: "Void Thunder",
    partial: "Electro DMG increases by 10%",
    full: "Upon using Heavy Attack or Resonance Skill, Electro DMG increases by 15%, stacking up to 2 times, each stack lasting for 15s",
    icon: "/images/sonatas/void-thunder.webp",
  },
  {
    name: "Moonlit Clouds",
    partial: "Energy Regen increases by 10%",
    full: "Upon using Outro Skill, ATK of the next Resonator increases by 22.5% for 15s",
    icon: "/images/sonatas/Moonlit-Clouds.webp",
  },
  {
    name: "Lingering Tunes",
    partial: "ATK increases by 10%",
    full: "While on the field, ATK increases by 5% every 1.5s, stacking up to 4 times. Outro Skill DMG increases by 60%",
    icon: "/images/sonatas/lingering-tunes.webp",
  },
  {
    name: "Freezing Frost",
    partial: "Glacio DMG increases by 10%",
    full: "Upon using Basic Attack or Heavy Attack, Glacio DMG increases by 10%, stacking up to three times, lasting for 15s",
    icon: "/images/sonatas/freezing-frost.webp",
  },
  {
    name: "Sierra Gale",
    partial: "Aero DMG increases by 10%",
    full: "Upon using Intro Skill, Aero DMG increases by 30% for 15s",
    icon: "/images/sonatas/Sierra-Gale.webp",
  },
  {
    name: "Celestial Light",
    partial: "Spectro DMG increases by 10%",
    full: "Upon using Intro Skill, Spectro DMG increases by 30% for 15s",
    icon: "/images/sonatas/Celestial-Light.webp",
  },
  {
    name: "Sun-sinking Eclipse",
    partial: "Havoc DMG increases by 10%",
    full: "Upon using Basic Attack or Heavy Attack, Havoc DMG increases by 7.5%, stacking up to four times for 15s",
    icon: "/images/sonatas/Havoc-Eclipse.webp",
  },
];

export const getSonataEffect = (name: string) => sonataEffects.find((sonataEffect) => sonataEffect.name === name);