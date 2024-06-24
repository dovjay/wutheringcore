"use server"
import { db } from "~/server/db";
import itemsJson from "../../../jsonData/items.json";
import weaponsJson from "../../../jsonData/weapons.json";
import { items, weapons } from "~/server/db/schema";

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