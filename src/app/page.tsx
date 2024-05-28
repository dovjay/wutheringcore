import Link from "next/link";
import TopNav from "~/components/TopNav";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col gap-2 container mx-auto">
        <p>Well, hello there!</p>
        <Button asChild>
          <Link href="/tierlist">
            Go to Tierlist
          </Link>
        </Button>
      </div>
    </main>
  );
}
