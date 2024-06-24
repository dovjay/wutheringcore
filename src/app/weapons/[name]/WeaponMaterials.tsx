import { MaterialCard } from "~/app/characters/[name]/BuildGuide";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { getWeaponMaterials } from "~/constants/weaponMaterials";
import { weapons } from "~/server/db/schema";

type WeaponMaterialType = {
  name: string,
  image: string,
  rarity: number
};

export default function WeaponMaterials({
  weapon,
  weaponMaterials
}: {
  weapon: typeof weapons.$inferSelect;
  weaponMaterials: {
    lesser: WeaponMaterialType[];
    greater: WeaponMaterialType[];
    credits: WeaponMaterialType[];
  };
}) {
  const { materialsBreakdown, totalMaterials } = getWeaponMaterials(weapon.rarity);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-4 p-4 bg-zinc-900 border border-zinc-700 rounded-xl">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Total Ascencion Materials</h3>
          <div className="flex gap-2 flex-wrap">
            {
              totalMaterials.lesser.map((lesser, i) => (
                <MaterialCard
                  material={weaponMaterials.lesser.find((material) => material.rarity === lesser.rarity)!}
                  size="lg"
                  total={lesser.amount}
                  key={i}
                />
              ))
            }
            {
              totalMaterials.greater.map((greater, i) => (
                <MaterialCard
                  material={weaponMaterials.greater.find((material) => material.rarity === greater.rarity)!}
                  size="lg"
                  total={greater.amount}
                  key={i}
                />
              ))
            }
            <MaterialCard
              size="lg"
              total={totalMaterials.credits}
              material={weaponMaterials.credits[0]!}
            />
          </div>
        </div>
      </div>

      <div className="flex-col p-4 bg-zinc-900 border border-zinc-700 rounded-xl w-full flex">
        <h3 className="font-bold">Material Breakdown</h3>
        <Table>
          <TableCaption>All material breakdown per level</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="lg:min-w-24">Ascension</TableHead>
              <TableHead className="lg:min-w-24">Lvl</TableHead>
              <TableHead className="lg:min-w-24">Cost</TableHead>
              <TableHead className="lg:min-w-24">Materials</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              materialsBreakdown.map((material, i) => (
                <TableRow key={i}>
                  <TableCell>{material.ascension}</TableCell>
                  <TableCell>{material.maxLevel}</TableCell>
                  <TableCell>{material.credits}</TableCell>
                  <TableCell className="flex gap-2">
                    {
                      material.lesserItem > 0 && (
                        <MaterialCard
                          size="sm"
                          material={weaponMaterials.lesser.find((weaponMat) => weaponMat.rarity === material.lesserRarity)!}
                          total={material.lesserItem}
                        />
                      )
                    }
                    {
                      material.greaterItem > 0 && (
                        <MaterialCard
                          size="sm"
                          material={weaponMaterials.greater.find((weaponMat) => weaponMat.rarity === material.greaterRarity)!}
                          total={material.greaterItem}
                        />
                      )
                    }
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
}