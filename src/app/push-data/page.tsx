"use client";

import { Button } from "~/components/ui/button";
import { pushItems } from "./actions";
import { useToast } from "~/components/ui/use-toast";

export default function PushData() {
  const { toast } = useToast();

  async function handlePushItems() {
    const result = await pushItems("items");
    toast({
      title: result.message,
    })
  }

  return (
    <main>
      <div className="flex flex-col gap-2 container py-4 mx-auto">
        <h1>Push items to db</h1>
        <Button onClick={handlePushItems}>Push</Button>
      </div>
    </main>
  )
}