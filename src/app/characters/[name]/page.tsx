import { fetchCharacter } from "./actions";
import CharacterOverviewMain from "./CharacterOverviewMain";

export default async function CharacterOverview({
  params,
}: {
  params: { name: string };
}) {
  const { data } = await fetchCharacter(params.name);

  return (
    <CharacterOverviewMain data={data!} />
  )
}
