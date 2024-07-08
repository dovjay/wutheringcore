import { desc, inArray, SQL, sql } from "drizzle-orm";
import { isTuple } from "~/lib/utils";
import { db } from "~/server/db";
import { echoes } from "~/server/db/schema";

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const mainEchoes = searchParams.get("main-echoes")?.split(",") || [];
    const subEchoes = searchParams.get("sub-echoes")?.split(",") || [];
    const sonatas = searchParams.get("sonatas")?.split(",") || [];

    const querySonatas: SQL[] = [];
    sonatas.forEach((sonata, i) => {
      querySonatas.push(sql`${echoes.sonatas} like '%${sql.raw(`${sonata}`)}%'`);
      if (i !== sonatas.length - 1)
        querySonatas.push(sql`or`);
    });

    const mainEchoesResult = await db.query.echoes.findMany({
      where: isTuple(mainEchoes) ? inArray(echoes.name, mainEchoes) : sql`(${sql.join(querySonatas, sql.raw(` `))}) and echoes.cost = 4`,
      limit: 10,
      orderBy: desc(echoes.cost),
    })
    const subEchoesResult = await db.query.echoes.findMany({
      where: isTuple(subEchoes) ? inArray(echoes.name, subEchoes) : sql`(${sql.join(querySonatas, sql.raw(` `))})`,
      limit: 12 + mainEchoesResult.length,
      orderBy: desc(echoes.cost),
    })

    return Response.json({
      data: {
        mainEchoes: mainEchoesResult,
        subEchoes: subEchoesResult
          .filter((echo) => mainEchoesResult
            .findIndex(mainEcho => echo.name === mainEcho.name) === -1),
      }
    });
  } catch (e) {
    return Response.json({ data: null, error: e });
  }
}