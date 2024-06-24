import { fetchWeapon } from "./actions";
import WeaponProfile from "./WeaponProfile";
import WeaponMaterials from "./WeaponMaterials";

export default async function WeaponOverview({
  params,
}: {
  params: { name: string };
}) {
  const { data } = await fetchWeapon(params.name.replaceAll("-", " "));

  if (!data) {
    return (
      <main>
        <div className="container my-10">
          <h1 className="text-5xl font-bold">Weapon Overview</h1>
          <h3 className="text-3xl font-bold">Weapon Not Found</h3>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="container my-10">
        <div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold">Weapon Overview</h1>
            <div className="flex max-md:flex-wrap gap-4">
              <WeaponProfile weapon={data.weapon!} />
              <WeaponMaterials weapon={data.weapon!} weaponMaterials={data.materials!} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}