import { Input } from "~/components/ui/input";

export default function Filters() {
  return (
    <div className="w-80 h-fit border border-zinc-700 bg-zinc-800 p-5 rounded-xl">
      <div className="flex gap-3 flex-col">
        <h2 className="font-bold">Filters</h2>
        <Input placeholder="Search Character" />
      </div>
    </div>
  );
}