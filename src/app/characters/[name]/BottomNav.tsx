import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function BottomNav() {
  return (
    <nav className="sticky bottom-4 py-3 bg-zinc-800/80 backdrop-blur border-2 border-zinc-700 flex w-fit mx-auto rounded-2xl divide-x divide-zinc-600">
      <div className="flex gap-2 items-center px-6">
        <p className="font-medium text-zinc-400">Mode</p>
        <button className="hover:bg-zinc-900 px-3 h-10 min-w-24 font-medium text-sm border border-zinc-700 rounded-lg transition">
          Noob
        </button>
      </div>
      <div className="flex gap-2 items-center px-6">
        <p className="font-medium text-zinc-400">Tab</p>
        <ToggleGroup type="single" defaultValue="build" size="lg">
          <ToggleGroupItem value="build">
            Build
          </ToggleGroupItem>
          <ToggleGroupItem value="profile">
            Profile
          </ToggleGroupItem>
          <ToggleGroupItem value="gameplay">
            Gameplay
          </ToggleGroupItem>
          <ToggleGroupItem value="calculations">
            Calculations
          </ToggleGroupItem>
          <ToggleGroupItem value="review">
            Review
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </nav>
  );
}