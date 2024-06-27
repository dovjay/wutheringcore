"use server";
import { and, asc, inArray, like, sql } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { characters } from "~/server/db/schema";

export async function fetchCharacters({
  q = "",
  rarity = [],
  element = [],
  weapon = [],
}: {
  q: string;
  rarity: number[];
  element: typeof characters.element.enumValues[number][];
  weapon: typeof characters.weapon.enumValues[number][];
}) {
  const filterBuilder = and(
    like(characters.name, `%${q}%`),
    isTuple(rarity) ? inArray(characters.rarity, rarity) : sql`true`,
    isTuple(element) ? inArray(characters.element, element) : sql`true`,
    isTuple(weapon) ? inArray(characters.weapon, weapon) : sql`true`
  )

  const data = await db.select().from(characters)
    .where(filterBuilder)
    .orderBy(asc(characters.name));

  return { data };
}