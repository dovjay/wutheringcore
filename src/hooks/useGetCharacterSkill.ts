"use client";
import { useState } from "react";
import { characters } from "~/server/db/schema";

export function useGetCharacterSkill(skills: typeof characters.skills._.data, type: string) {
  const [skill, setSkill] = useState(skills.activeSkill.find(skill => skill.type === type) || skills.passiveSkill.find(skill => skill.type === type) || skills.concertoSkill.find(skill => skill.type === type));

  return { skill };
}