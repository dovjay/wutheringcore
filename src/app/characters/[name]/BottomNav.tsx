import { useContext } from "react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { OverviewTab, TabContext } from "~/contexts/CharacterTabContext";

export default function BottomNav() {
  const { openTab, setOpenTab } = useContext(TabContext);

  return (
    <nav className="sticky bottom-4 py-3 mx-auto bg-zinc-800/80 backdrop-blur border-2 border-zinc-700 flex w-fit rounded-2xl divide-x divide-zinc-600">
      <div className="flex gap-2 items-center px-6">
        <p className="font-medium text-zinc-400">Tab</p>
        <ToggleGroup type="single" defaultValue={openTab} size="lg" onValueChange={(value: OverviewTab) => setOpenTab(value)}>
          <ToggleGroupItem value={OverviewTab.Build} disabled={openTab === OverviewTab.Build} className="disabled:opacity-100">
            Build
          </ToggleGroupItem>
          <ToggleGroupItem value={OverviewTab.Profile} disabled={openTab === OverviewTab.Profile} className="disabled:opacity-100">
            Profile
          </ToggleGroupItem>
          <ToggleGroupItem value={OverviewTab.Review} disabled={openTab === OverviewTab.Review} className="disabled:opacity-100">
            Review
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </nav>
  );
}