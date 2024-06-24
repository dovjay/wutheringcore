import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges and concatenates class values using the `twMerge` and `clsx` functions.
 *
 * @param {ClassValue[]} inputs - The class values to be merged and concatenated.
 * @return {string} - The merged and concatenated class values.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Checks if the given array is a tuple by verifying if it has at least one element.
 *
 * @param {T[]} array - The array to be checked.
 * @return {array is T[]} - Returns true if the array has at least one element, false otherwise.
 */
export function isTuple<T extends any[]>(array: T): array is T {
  return array.length > 0;
}