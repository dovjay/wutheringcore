import { inArray, sql } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { weapons } from "~/server/db/schema";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bestWeapons = searchParams.get("best-weapons")?.split(",") || [];
    const data = await db.query.weapons.findMany({
      where: isTuple(bestWeapons) ? inArray(weapons.name, bestWeapons) : sql`false`,
    });

    return Response.json({ data });
  } catch (e) {
    return Response.json({ data: null, error: e });
  }
}