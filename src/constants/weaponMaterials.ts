function sumMaterials(tier: "lesser" | "greater", materials: typeof WeaponMaterials) {
  let materialItem = [];
  for (let i = 2; i <= 5; i++) {
    materialItem.push({
      rarity: i,
      amount: materials.reduce((total, material) => {
        return material[`${tier}Rarity`] === i
          ? material[`${tier}Item`] + total
          : total;
      }, 0),
    })
  }

  return materialItem;
}

export function getWeaponMaterials(rarity: number) {
  const materialsBreakdown = WeaponMaterials.filter((material) => material.weaponTier === rarity);
  const totalMaterials = {
    lesser: sumMaterials("lesser", materialsBreakdown),
    greater: sumMaterials("greater", materialsBreakdown),
    credits: materialsBreakdown.reduce((total, material) => total + material.credits, 0),
  }
  return { materialsBreakdown, totalMaterials };
};

export const WeaponMaterials = [
  {
    ascension: 1,
    maxLevel: 20,
    lesserItem: 6,
    lesserRarity: 2,
    greaterItem: 0,
    greaterRarity: 0,
    credits: 10000,
    weaponTier: 5
  },
  {
    ascension: 2,
    maxLevel: 40,
    lesserItem: 6,
    lesserRarity: 3,
    greaterItem: 6,
    greaterRarity: 2,
    credits: 20000,
    weaponTier: 5
  },
  {
    ascension: 3,
    maxLevel: 50,
    lesserItem: 4,
    lesserRarity: 4,
    greaterItem: 8,
    greaterRarity: 3,
    credits: 40000,
    weaponTier: 5
  },
  {
    ascension: 4,
    maxLevel: 60,
    lesserItem: 6,
    lesserRarity: 4,
    greaterItem: 6,
    greaterRarity: 4,
    credits: 60000,
    weaponTier: 5
  },
  {
    ascension: 5,
    maxLevel: 70,
    lesserItem: 4,
    lesserRarity: 5,
    greaterItem: 8,
    greaterRarity: 5,
    credits: 80000,
    weaponTier: 5
  },
  {
    ascension: 6,
    maxLevel: 80,
    lesserItem: 8,
    lesserRarity: 5,
    greaterItem: 12,
    greaterRarity: 5,
    credits: 120000,
    weaponTier: 5
  },
  {
    ascension: 1,
    maxLevel: 20,
    lesserItem: 5,
    lesserRarity: 2,
    greaterItem: 0,
    greaterRarity: 0,
    credits: 8000,
    weaponTier: 4
  },
  {
    ascension: 2,
    maxLevel: 40,
    lesserItem: 5,
    lesserRarity: 3,
    greaterItem: 5,
    greaterRarity: 2,
    credits: 16000,
    weaponTier: 4
  },
  {
    ascension: 3,
    maxLevel: 50,
    lesserItem: 4,
    lesserRarity: 4,
    greaterItem: 7,
    greaterRarity: 3,
    credits: 32000,
    weaponTier: 4
  },
  {
    ascension: 4,
    maxLevel: 60,
    lesserItem: 5,
    lesserRarity: 4,
    greaterItem: 5,
    greaterRarity: 4,
    credits: 48000,
    weaponTier: 4
  },
  {
    ascension: 5,
    maxLevel: 70,
    lesserItem: 4,
    lesserRarity: 5,
    greaterItem: 7,
    greaterRarity: 5,
    credits: 64000,
    weaponTier: 4
  },
  {
    ascension: 6,
    maxLevel: 80,
    lesserItem: 7,
    lesserRarity: 5,
    greaterItem: 10,
    greaterRarity: 5,
    credits: 96000,
    weaponTier: 4
  },
  {
    ascension: 1,
    maxLevel: 20,
    lesserItem: 4,
    lesserRarity: 2,
    greaterItem: 0,
    greaterRarity: 0,
    credits: 6000,
    weaponTier: 3
  },
  {
    ascension: 2,
    maxLevel: 40,
    lesserItem: 4,
    lesserRarity: 3,
    greaterItem: 4,
    greaterRarity: 2,
    credits: 12000,
    weaponTier: 3
  },
  {
    ascension: 3,
    maxLevel: 50,
    lesserItem: 3,
    lesserRarity: 4,
    greaterItem: 5,
    greaterRarity: 3,
    credits: 24000,
    weaponTier: 3
  },
  {
    ascension: 4,
    maxLevel: 60,
    lesserItem: 4,
    lesserRarity: 4,
    greaterItem: 4,
    greaterRarity: 4,
    credits: 36000,
    weaponTier: 3
  },
  {
    ascension: 5,
    maxLevel: 70,
    lesserItem: 3,
    lesserRarity: 5,
    greaterItem: 5,
    greaterRarity: 5,
    credits: 48000,
    weaponTier: 3
  },
  {
    ascension: 6,
    maxLevel: 80,
    lesserItem: 5,
    lesserRarity: 5,
    greaterItem: 8,
    greaterRarity: 5,
    credits: 72000,
    weaponTier: 3
  },
  {
    ascension: 1,
    maxLevel: 20,
    lesserItem: 3,
    lesserRarity: 2,
    greaterItem: 0,
    greaterRarity: 0,
    credits: 4000,
    weaponTier: 2
  },
  {
    ascension: 2,
    maxLevel: 40,
    lesserItem: 3,
    lesserRarity: 3,
    greaterItem: 3,
    greaterRarity: 2,
    credits: 8000,
    weaponTier: 2
  },
  {
    ascension: 3,
    maxLevel: 50,
    lesserItem: 2,
    lesserRarity: 4,
    greaterItem: 4,
    greaterRarity: 3,
    credits: 16000,
    weaponTier: 2
  },
  {
    ascension: 4,
    maxLevel: 60,
    lesserItem: 3,
    lesserRarity: 4,
    greaterItem: 3,
    greaterRarity: 4,
    credits: 24000,
    weaponTier: 2
  },
  {
    ascension: 5,
    maxLevel: 70,
    lesserItem: 2,
    lesserRarity: 5,
    greaterItem: 4,
    greaterRarity: 5,
    credits: 32000,
    weaponTier: 2
  },
  {
    ascension: 1,
    maxLevel: 20,
    lesserItem: 2,
    lesserRarity: 2,
    greaterItem: 0,
    greaterRarity: 0,
    credits: 2000,
    weaponTier: 1
  },
  {
    ascension: 2,
    maxLevel: 40,
    lesserItem: 2,
    lesserRarity: 3,
    greaterItem: 2,
    greaterRarity: 2,
    credits: 4000,
    weaponTier: 1
  },
  {
    ascension: 3,
    maxLevel: 50,
    lesserItem: 1,
    lesserRarity: 4,
    greaterItem: 2,
    greaterRarity: 3,
    credits: 8000,
    weaponTier: 1
  },
  {
    ascension: 4,
    maxLevel: 60,
    lesserItem: 2,
    lesserRarity: 4,
    greaterItem: 2,
    greaterRarity: 4,
    credits: 12000,
    weaponTier: 1
  },
  {
    ascension: 5,
    maxLevel: 70,
    lesserItem: 1,
    lesserRarity: 5,
    greaterItem: 2,
    greaterRarity: 5,
    credits: 16000,
    weaponTier: 1
  }
];