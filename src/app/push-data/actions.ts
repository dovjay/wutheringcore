"use server"
import { db } from "~/server/db";
import itemsJson from "../../../jsonData/items.json";
import weaponsJson from "../../../jsonData/weapons.json";
import echoesJson from "../../../jsonData/echoes.json";
import charactersJson from "../../../jsonData/characters.json";
import { characters, echoes, items, weapons } from "~/server/db/schema";

export async function pushItems(category: string) {
  try {
    const result = await db.query.items.findMany();
    if (result.length > 0) {
      return { message: "Already pushed" };
    }

    await db.insert(items).values(itemsJson);
    return { message: "Pushed" };
  } catch (e) {
    return { message: "Failed to push" };
  }
}

export async function pushWeapons(category: string) {
  try {
    const result = await db.query.weapons.findMany();
    if (result.length > 0) {
      return { message: "Already pushed" };
    }

    const payload = weaponsJson.map(weapon => {
      return {
        name: weapon.name,
        image: weapon.image,
        type: weapon.type,
        rarity: weapon.rarity,
        about: weapon.about,
        ascensionGreater: weapon.ascensionItems.greaterItem,
        ascensionLesser: weapon.ascensionItems.lesserItem,
        mainStat: weapon.mainStat.value,
        subStat: weapon.subStat,
        skill: weapon.skill,
      }
    })

    await db.insert(weapons).values(payload as typeof weapons.$inferInsert[]);
    return { message: "Pushed" };
  } catch (e) {
    return { message: "Failed to push" };
  }
}

export async function pushEchoes(category: string) {
  try {
    const result = await db.query.echoes.findMany();
    if (result.length > 0) {
      return { message: "Already pushed" };
    }

    await db.insert(echoes).values(echoesJson as typeof echoes.$inferInsert[]);
    return { message: "Pushed" };
  } catch (e) {
    return { message: "Failed to push" };
  }
}

export async function pushCharacters(category: string) {
  try {
    const result = await db.query.characters.findMany();
    if (result.length > 0) {
      return { message: "Already pushed" };
    }

    const payload = charactersJson.map(char => ({
      name: char.name,
      introduction: char.introduction,
      role: 'Change Role',
      rarity: Number(char.rarity),
      element: char.element,
      weapon: char.weapon,
      imageCard: char.image,
      imageProfile: '',
      voiceActors: char.voiceActors,
      released: true,
      sequences: char.sequences,
      minorFortes: char.minorFortes,
      baseStats: char.baseStats,
      skills: char.skills,
      quickSummary: char.quickSummary,
      pros: char.pros,
      cons: char.cons,
      synergies: char.synergies,
      damageProfiles: char.damageProfiles,
      materials: char.materials
    }));

    await db.insert(characters).values(payload as typeof characters.$inferInsert[]);
    return { message: "Pushed" };
  } catch (e) {
    return { message: "Failed to push" };
  }
}