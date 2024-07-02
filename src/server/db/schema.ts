// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `wutheringcore_${name}`);

export const items = createTable(
  "item",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }).notNull(),
    image: text("image"),
    type: text("type", { length: 256 }),
    subtype: text("subtype", { length: 256 }).notNull(),
    rarity: int("rarity").notNull(),
    description: text("description").notNull(),
  },
  (table) => ({
    nameIndex: index("name_idx").on(table.name),
  })
)

export const weapons = createTable(
  "weapon",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }).notNull(),
    image: text("image"),
    type: text("type",
      { enum: ["Broadblade", "Sword", "Pistols", "Gauntlets", "Rectifier"] }
    ).notNull(),
    rarity: int("rarity").notNull(),
    about: text("about"),
    ascensionGreater: text("ascension_greater",
      { enum: ["Waveworn Residue", "Metallic Drip", "Phlogiston", "Cadence", "Helix"] }
    ).notNull(),
    ascensionLesser: text("ascension_lesser",
      { enum: ["Whisperin Core", "Howler Core", "Ring"] }
    ).notNull(),
    mainStat: text("main_stat", { mode: "json" }).$type<string[]>().notNull(),
    subStat: text("sub_stat", { mode: "json" }).$type<{ stat: string, value: string[] }>().notNull(),
    skill: text("skill", { mode: "json" }).$type<{ name: string, description: string[] }>().notNull(),
  }
)

export const echoes = createTable(
  "echo",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }).notNull(),
    image: text("image"),
    tier: text("tier", { enum: ["Common", "Elite", "Overlord", "Calamity"] }).notNull(),
    cost: int("cost").notNull(),
    ability: text("ability", { mode: "json" }).$type<string[]>().notNull(),
    sonatas: text("sonatas", { mode: "json" }).$type<string[]>().notNull(),
  }
)

type CharacterMultiplier = {
  Name: string,
  Lv1: string,
  Lv2: string,
  Lv3: string,
  Lv4: string,
  Lv5: string,
  Lv6: string,
  Lv7: string,
  Lv8: string,
  Lv9: string,
  Lv10: string
};

type CharacterSkillDetail = {
  type: string,
  name: string,
  icon: string,
  description: string,
  multiplier: CharacterMultiplier[] | null
};

type CharacterSkill = {
  activeSkill: CharacterSkillDetail[],
  passiveSkill: CharacterSkillDetail[],
  concertoSkill: CharacterSkillDetail[],
};

type CharacterMaterials = {
  lesser: string,
  greater: string,
  plant: string,
  overlord: string,
  calamity: string,
};

export const characters = createTable(
  "character",
  {
    // Profile
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 96 }).notNull(),
    introduction: text("introduction").notNull(),
    role: text("role"),
    rarity: int("rarity").notNull(),
    element: text("element", { enum: ["Aero", "Fusion", "Electro", "Spectro", "Havoc", "Glacio"] }).notNull(),
    weapon: text("weapon", { enum: ["Broadblade", "Sword", "Pistols", "Gauntlets", "Rectifier"] }).notNull(),
    imageCard: text("image_card"),
    imageBanner: text("image_banner"),
    imageProfile: text("image_profile"),
    voiceActors: text("voice_actors", { mode: "json" }).$type<{ lang: string, name: string }[]>().notNull(),
    released: int("released", { mode: "boolean" }).notNull(),
    // Stats
    sequences: text("sequence", { mode: "json" }).$type<{ name: string, description: string, icon: string }[]>().notNull(),
    minorFortes: text("minor_fortes", { mode: "json" }).$type<{ stat: string, value: string }[]>().notNull(),
    baseStats: text("base_stats", { mode: "json" }).$type<{ hp: number[], atk: number[], def: number[], maxEnergy: number }>().notNull(),
    skills: text("skills", { mode: "json" }).$type<CharacterSkill>().notNull(),
    // Builds
    quickSummary: text("quick_summary").notNull(),
    pros: text("pros", { mode: "json" }).$type<string[]>().notNull(),
    cons: text("cons", { mode: "json" }).$type<string[]>().notNull(),
    synergies: text("synergies", { mode: "json" }).$type<string[]>().notNull(),
    damageProfiles: text("damage_profiles", { mode: "json" }).$type<{ stat: string, value: string }[]>().notNull(),
    materials: text("materials", { mode: "json" }).$type<CharacterMaterials>().notNull(),
  }
);

export const characterBuild = createTable(
  "character_build",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    buildName: text("build_name", { length: 96 }).notNull(),
    abilityPriority: text("ability_priority", { mode: "json" }).$type<{ name: string, equalNext: boolean }[]>().notNull(),
    suggestedSequence: text("suggested_sequence", { mode: "json" }).$type<{ name: string, summary: string }[]>(),
    sonataCombination: text("sonata_combination", { mode: "json" }).$type<string[]>().notNull(),
    mainStats: text("main_stats", { mode: "json" }).$type<{ cost: number, stats: string[] }[]>().notNull(),
    subStats: text("sub_stats").notNull(),
    mainEchoes: text("main_echoes", { mode: "json" }).$type<string[]>().notNull(),
    subEchoes: text("sub_echoes", { mode: "json" }).$type<string[]>().notNull(),
    bestWeapons: text("best_weapons", { mode: "json" }).$type<string[]>().notNull(),
    characterId: int("character_id").references(() => characters.id),
  }
);
