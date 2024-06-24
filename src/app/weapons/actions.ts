"use server";

import { and, desc, inArray, like, or, sql } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { weapons } from "~/server/db/schema";

export async function fetchWeapons({
  q = "",
  types = [],
  rarity = [],
}: {
  q?: string;
  types?: typeof weapons.type.enumValues[number][];
  rarity?: number[];
}) {
  const filterBuilder = and(
    or(
      like(weapons.name, `%${q}%`),
    ),
    isTuple(types) ? inArray(weapons.type, types) : sql`true`,
    isTuple(rarity) ? inArray(weapons.rarity, rarity) : sql`true`
  )

  const data = await db.select().from(weapons)
    .where(filterBuilder)
    .orderBy(desc(weapons.rarity));

  const total = (await db.select().from(weapons)
    .where(filterBuilder)).length;

  return { data, total };
}