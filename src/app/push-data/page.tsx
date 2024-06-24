"use client";

import { Button } from "~/components/ui/button";
import { pushEchoes, pushItems, pushWeapons } from "./actions";
import { useToast } from "~/components/ui/use-toast";

export default function PushData() {
  const { toast } = useToast();

  async function handlePushItems() {
    const result = await pushItems("items");
    toast({
      title: result.message,
    })
  }
  async function handlePushWeapons() {
    const result = await pushWeapons("weapons");
    toast({
      title: result.message,
    });
  }

  async function handlePushEchoes() {
    const result = await pushEchoes("echoes");
    toast({
      title: result.message,
    });
  }

  return (
    <main>
      <div className="flex flex-col gap-2 container py-4 mx-auto">
        <h1>Push items to db</h1>
        <Button onClick={handlePushItems}>Push</Button>
      </div>
      <div className="flex flex-col gap-2 container py-4 mx-auto">
        <h1>Push wewapons to db</h1>
        <Button onClick={handlePushWeapons}>Push</Button>
      </div>
      <div className="flex flex-col gap-2 container py-4 mx-auto">
        <h1>Push echoes to db</h1>
        <Button onClick={handlePushEchoes}>Push</Button>
      </div>
    </main>
  )
}