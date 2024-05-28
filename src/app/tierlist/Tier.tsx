import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

function TierCard() {
  return (
    <div className="h-fit border border-zinc-600 rounded-xl p-4">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-slate-400 rounded-lg" />
        <div className="flex flex-col gap-2">
          <p className="font-bold">Jiyan</p>
          <Badge variant="secondary" color="red">Main DPS</Badge>
        </div>
      </div>
    </div>
  );
}

export default function Tier({
  tier,
  bgColor,
}: {
  tier: string;
  bgColor: string;
}) {
  return (
    <div className="flex border border-zinc-700 rounded-xl">
      <div className={
        cn(
          "flex items-center justify-center p-5 rounded-l-xl w-28",
          bgColor,
        )
      }>
        <h3 className="text-5xl font-extrabold uppercase text-zinc-800">{tier}</h3>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {
          Array.from({ length: 7 }).map((_, i) => (
            <TierCard key={i} />
          ))
        }
      </div>
    </div>
  );
}