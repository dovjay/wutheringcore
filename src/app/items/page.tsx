import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import Filters from "./Filters";
import { fetchItems, fetchItemTypes } from "./actions";
import PaginationItems from "../../components/PaginationComponent";
import { cn } from "~/lib/utils";

export default async function Items({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const itemsFilter = {
    page: Number(searchParams.page) ?? 1,
    pageSize: 20,
    q: searchParams.q as string ?? "",
    types: (searchParams.types as string)?.split(",").filter(type => type) ?? [],
    rarity: (searchParams.rarity as string)?.split(",").map((Number)) ?? [],
  }

  const items = await fetchItems(itemsFilter);
  const itemTypes = await fetchItemTypes();

  return (
    <main>
      <section className="container my-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Items</h1>
          <Filters itemTypes={itemTypes as string[]} />
          <div className="border border-zinc-700 bg-zinc-900 rounded-xl">
            <Table>
              <TableHeader>
                <TableRow className="text-md">
                  <TableHead className="min-w-20"></TableHead>
                  <TableHead className="min-w-64">Items</TableHead>
                  <TableHead className="w-full">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  items.data.map((item, i) => (
                    <TableRow className="dark:odd:bg-zinc-800" key={i}>
                      <TableCell className="w-fit">
                        <img src={item.image as string} className={cn(
                          "w-20 aspect-square rounded p-1",
                          `rarity-${item.rarity}`,
                        )} />
                      </TableCell>
                      <TableCell>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm text-zinc-400">{item.type}</div>
                        <div className="text-sm text-zinc-400">{item.subtype}</div>
                      </TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
            {
              items.data.length === 0 && (
                <div className="text-center p-5 text-zinc-400">No items found</div>
              )
            }
          </div>
          <PaginationItems total={items.total} />
        </div>
      </section>
    </main>
  )
}