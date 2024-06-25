import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { echoes } from "~/server/db/schema";

export async function fetchEcho(name: string) {
  try {
    const data = await db.query.echoes.findFirst({
      where: eq(echoes.name, decodeURIComponent(name)),
    });
    return { data }
  } catch (e) {
    return { data: null }
  }
}