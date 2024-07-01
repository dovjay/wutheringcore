export const CharacterAscension = [
  {
    ascension: 1,
    maxLevel: 20,
    overlord: 0,
    plant: 0,
    lesser: 0,
    lesserRarity: 0,
    credit: 2000
  },
  {
    ascension: 2,
    maxLevel: 40,
    overlord: 0,
    plant: 0,
    lesser: 4,
    lesserRarity: 2,
    credit: 5000
  },
  {
    ascension: 3,
    maxLevel: 50,
    overlord: 3,
    plant: 4,
    lesser: 4,
    lesserRarity: 3,
    credit: 10000
  },
  {
    ascension: 4,
    maxLevel: 60,
    overlord: 6,
    plant: 8,
    lesser: 8,
    lesserRarity: 3,
    credit: 15000
  },
  {
    ascension: 5,
    maxLevel: 70,
    overlord: 9,
    plant: 12,
    lesser: 4,
    lesserRarity: 4,
    credit: 20000
  },
  {
    ascension: 6,
    maxLevel: 80,
    overlord: 12,
    plant: 16,
    lesser: 8,
    lesserRarity: 4,
    credit: 40000
  },
  {
    ascension: 7,
    maxLevel: 90,
    overlord: 16,
    plant: 20,
    lesser: 4,
    lesserRarity: 5,
    credit: 80000
  }
]

export function getTotalAscension() {
  return {
    overlord: CharacterAscension.reduce((acc, cur) => acc + cur.overlord, 0),
    plant: CharacterAscension.reduce((acc, cur) => acc + cur.plant, 0),
    credit: CharacterAscension.reduce((acc, cur) => acc + cur.credit, 0),
    lesser: [
      {
        rarity: 2,
        amount: CharacterAscension.reduce((acc, cur) => {
          if (cur.lesserRarity === 2) {
            return acc + cur.lesser
          }
          return acc + 0
        }, 0)
      },
      {
        rarity: 3,
        amount: CharacterAscension.reduce((acc, cur) => {
          if (cur.lesserRarity === 3) {
            return acc + cur.lesser
          }
          return acc + 0
        }, 0)
      },
      {
        rarity: 4,
        amount: CharacterAscension.reduce((acc, cur) => {
          if (cur.lesserRarity === 4) {
            return acc + cur.lesser
          }
          return acc + 0
        }, 0)
      },
      {
        rarity: 5,
        amount: CharacterAscension.reduce((acc, cur) => {
          if (cur.lesserRarity === 5) {
            return acc + cur.lesser
          }
          return acc + 0
        }, 0)
      }
    ]
  }
}