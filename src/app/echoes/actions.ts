"use server";

import { and, asc, eq, inArray, like, SQL, sql } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { echoes } from "~/server/db/schema";

export async function fetchEchoes({
  q = "",
  cost = "any",
  sonatas = [],
  tier = [],
}: {
  q?: string;
  cost?: "1" | "3" | "4" | "any";
  sonatas?: string[];
  tier?: typeof echoes.tier.enumValues[number][];
}) {
  const querySonatas: SQL[] = [];
  sonatas.forEach((sonata, i) => {
    querySonatas.push(sql`${echoes.sonatas} like '%${sql.raw(`${sonata}`)}%'`);
    if (i !== sonatas.length - 1)
      querySonatas.push(sql`and`);
  });

  const filterBuilder = and(
    like(echoes.name, `%${q}%`),
    cost !== "any" ? eq(echoes.cost, Number(cost)) : sql`true`,
    isTuple(sonatas) ? sql.join(querySonatas, sql.raw(` `)) : sql`true`,
    isTuple(tier) ? inArray(echoes.tier, tier) : sql`true`
  )

  const result = await db.select().from(echoes)
    .where(filterBuilder)
    .orderBy(asc(echoes.name));

  return result;
}