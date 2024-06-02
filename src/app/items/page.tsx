"use client"
import { Separator } from "@radix-ui/react-separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import Filters from "./Filters";

export default function Items() {
  return (
    <main>
      <section className="container my-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Items</h1>
          <Filters />
          <div className="border border-zinc-700 bg-zinc-900 rounded-xl">
            <Table>
              <TableHeader>
                <TableRow className="text-lg  ">
                  <TableHead className="min-w-16"></TableHead>
                  <TableHead className="min-w-64">Items</TableHead>
                  <TableHead className="w-full">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  Array.from({ length: 20 }).map((item, i) => (
                    <TableRow className="dark:odd:bg-zinc-800" key={i}>
                      <TableCell>
                        <div className="w-full aspect-square bg-zinc-400 rounded-lg" />
                      </TableCell>
                      <TableCell>
                        <div className="font-bold">Item name</div>
                        <div className="text-sm text-zinc-400">Item tag</div>
                      </TableCell>
                      <TableCell>Item longest description ever that i write lazily</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  )
}