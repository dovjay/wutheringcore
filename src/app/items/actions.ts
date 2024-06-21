import { like, inArray, or, sql, and, asc } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { items } from "~/server/db/schema";

export async function fetchItems({
  page = 1,
  pageSize = 20,
  q = "",
  types = [],
  rarity = [],
}: {
  page?: number;
  pageSize?: number;
  q?: string;
  types?: string[];
  rarity?: number[];
}) {
  const filterBuilder = and(
    or(
      like(items.name, `%${q}%`),
      like(items.description, `%${q}%`),
    ),
    isTuple(types) ? inArray(items.type, types) : sql`true`,
    isTuple(rarity) ? inArray(items.rarity, rarity) : sql`true`
  );

  const data = await db.select().from(items)
    .where(filterBuilder)
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .orderBy(asc(items.name));

  const total = (await db.select().from(items)
    .where(filterBuilder)
  ).length;

  return { data, total };
}

export async function fetchItemTypes() {
  const result = await db.selectDistinct({ type: items.type }).from(items);
  return result.map((item) => item.type).filter(type => type);
}