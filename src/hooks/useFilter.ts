"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

/**
 * Returns an object containing state and functions related to filtering.
 *
 * @return {Object} An object with the following properties:
 *   - search: The current search query string.
 *   - setSearch: A function to update the search query string.
 *   - debounced: A debounced version of the handleFilter function.
 *   - handleFilter: A function to update the search query string and navigate to a new URL.
 *   - handleReset: A function to reset the search query string and navigate to a new URL.
 */
export default function useFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  /**
   * A function to update the search query string and navigate to a new URL.
   *
   * @param {string} paramKey - The key of the parameter to update in the search query string.
   * @param {string | string[]} value - The value to update or set for the specified key.
   */
  const handleFilter = (paramKey: string, value: string | string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.length > 0) params.set(paramKey, typeof value === "string" ? value : value.join(","));
    else params.delete(paramKey);

    params.delete("page");
    router.push(pathname + "?" + params.toString());
  };

  /**
   * A function to reset the search query string and navigate to a new URL.
   */
  const handleReset = () => {
    setSearch("");
    router.push(pathname);
  }

  const debounced = useDebouncedCallback(handleFilter, 500);

  return {
    search,
    setSearch,
    debounced,
    handleFilter,
    handleReset
  }
}