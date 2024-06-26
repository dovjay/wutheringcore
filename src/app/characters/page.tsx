import CharacterList from "./CharacterList";
import Filters from "./Filters";

export default function Characters() {
  return (
    <main>
      <section className="container my-10">
        <div className="flex gap-4">
          <Filters />
          <CharacterList />
        </div>
      </section>
    </main>
  )
}