import { fetchEcho } from "./actions";
import EchoOverviewSection from "./EchoOverviewSection";

export default async function EchoOverview({
  params,
}: {
  params: { name: string };
}) {
  const { data: Echo } = await fetchEcho(params.name);

  if (!Echo) {
    return (
      <main>
        <div className="container my-10">
          <h1 className="text-3xl font-bold">Echo Not Found</h1>
        </div>
      </main>
    )
  }

  return (
    <main>
      <EchoOverviewSection Echo={Echo} />
    </main>
  );
}