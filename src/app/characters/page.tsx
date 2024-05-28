import CharacterList from "./CharacterList";
import Filters from "./Filters";

export default function Characters() {
  return (
    <section className="container mx-auto my-10">
      <div className="flex gap-4">
        <Filters />
        <CharacterList />
      </div>
    </section>
  )
}