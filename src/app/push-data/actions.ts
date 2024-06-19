"use server"
import { db } from "~/server/db";
import itemsJson from "../../../jsonData/items.json";
import { items } from "~/server/db/schema";

export async function pushItems(category: string) {
  try {
    const result = await db.query.items.findMany();
    if (result.length > 0) {
      return { message: "Already pushed" };
    }

    await db.insert(items).values(itemsJson);
    return { message: "Pushed" };
  } catch (e) {
    return { message: "Failed to push" };
  }
}