import { desc, inArray, sql } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { weapons } from "~/server/db/schema";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bestWeapons = decodeURIComponent(searchParams.get("best-weapons")!)?.split(",") || [];

    const data = await db.query.weapons.findMany({
      where: isTuple(bestWeapons) ? inArray(weapons.name, bestWeapons) : sql`false`,
      orderBy: desc(weapons.rarity),
    });

    return Response.json({ data });
  } catch (e) {
    return Response.json({ data: null, error: e });
  }
}