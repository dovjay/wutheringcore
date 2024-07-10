"use server";

import { db } from "~/server/db";
import { eq, like } from "drizzle-orm";
import { items, weapons } from "~/server/db/schema";

export async function fetchWeapon(name: string) {
  try {
    const decodedName = decodeURIComponent(name);
    const weapon = await db.query.weapons.findFirst({ where: like(weapons.name, decodedName) });

    const lesser = await db.select().from(items)
      .where(like(items.name, `%${weapon!.ascensionLesser}%`));

    const greater = await db.select().from(items)
      .where(like(items.name, `%${weapon!.ascensionGreater}%`));

    const credits = await db.select().from(items).where(eq(items.name, "Shell Credit"));
    return {
      data: {
        weapon,
        materials: { lesser, greater, credits },
      }
    };
  } catch (e) {
    return { data: null };
  }
}