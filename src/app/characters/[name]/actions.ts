import { eq, inArray, like, or, sql } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { characterBuild, characters, items } from "~/server/db/schema";

export async function fetchCharacter(name: string) {
  try {
    let character = await db.query.characters.findFirst({
      where: eq(characters.name, decodeURIComponent(name)),
    });

    if (!character) return { character: null };

    const materials = await db.query.items.findMany({
      where: or(
        like(items.name, `%${character.materials.lesser}%`),
        like(items.name, `%${character.materials.greater}%`),
        eq(items.name, "Shell Credit"),
        eq(items.name, character.materials.plant),
        eq(items.name, character.materials.overlord),
        eq(items.name, character.materials.calamity),
      )
    });

    const synergies = await db.query.characters.findMany({
      where: isTuple(character.synergies) ? inArray(characters.name, character.synergies) : sql`false`,
    });

    let builds = await db.query.characterBuild.findMany({
      where: eq(characterBuild.characterId, character.id),
    });

    return {
      data: {
        character,
        materials,
        synergies,
        builds,
      }
    };
  } catch (e) {
    return { data: null, error: e };
  }
}