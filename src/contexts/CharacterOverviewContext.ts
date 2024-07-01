import { createContext } from "react";
import { characterBuild, characters, items } from "~/server/db/schema";

export type CharacterOverview = {
  character: typeof characters.$inferSelect | null;
  materials: typeof items.$inferSelect[];
  synergies: typeof characters.$inferSelect[];
  builds: typeof characterBuild.$inferSelect[];
};

export const CharacterOverviewContext = createContext<CharacterOverview>({
  character: null,
  materials: [],
  synergies: [],
  builds: [],
});