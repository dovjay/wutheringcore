"use client"

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";

function Logo() {
  return (
    <Link href="/" passHref>
      <div className="font-bold text-3xl mr-2 group">
        <span className="">Wuthering</span>
        <span className="text-zinc-500 group-hover:text-lime-400 transition">Core</span>
      </div>
    </Link>
  )
}

export default function TopNav() {
  return (
    <nav className="w-full px-5">
      <NavigationMenu>
        <NavigationMenuList className="py-3 gap-4">
          <NavigationMenuItem>
            <Logo />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/characters" legacyBehavior passHref>
              <NavigationMenuLink>
                Characters
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/weapons" legacyBehavior passHref>
              <NavigationMenuLink>
                Weapons
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/echoes" legacyBehavior passHref>
              <NavigationMenuLink>
                Echoes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/items" legacyBehavior passHref>
              <NavigationMenuLink>
                Items
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="/tierlist" legacyBehavior passHref>
              <NavigationMenuLink>
                Tierlist
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Databases</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-96 gap-3 p-4">
                <ListItem href="/weapons" title="Weapons">
                  Weapon Database
                </ListItem>
                <ListItem href="/echoes" title="Echoes">
                  Echo Database
                </ListItem>
                <ListItem href="/items" title="Items">
                  Items Database
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
