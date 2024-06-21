"use client";
import { useState, useEffect } from 'react';

/**
 * Calculates and returns an array of page numbers within a specified radius of the active page.
 *
 * @param {number} totalPages - The total number of pages available
 * @param {number} activePage - The currently active page
 * @param {number} radius - The radius around the active page to fetch other pages
 * @return {number[]} An array of page numbers within the specified radius of the active page
 */
export default function useGetPagesInRadius(totalPages: number, activePage: number, radius: number): number[] {
  const [selectedPages, setSelectedPages] = useState<number[]>([]);

  useEffect(() => {
    function calculatePages(): number[] {
      const pages: number[] = [];

      // Calculate start and end pages based on the radius
      let startPage = Math.max(1, activePage - radius);
      let endPage = Math.min(totalPages, activePage + radius);

      // Adjust start and end pages if there are not enough pages on one side
      if (endPage - startPage + 1 < radius * 2 + 1) {
        if (startPage === 1) {
          endPage = Math.min(totalPages, startPage + radius * 2);
        } else if (endPage === totalPages) {
          startPage = Math.max(1, endPage - radius * 2);
        }
      }

      // Push pages within the range to the array
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Ensure the active page is always in the middle of the range (when possible)
      const activeIndex = pages.indexOf(activePage);
      if (activeIndex !== -1 && pages.length > radius * 2 + 1) {
        if (activeIndex - radius < 0) {
          return pages.slice(0, radius * 2 + 1);
        } else if (activeIndex + radius >= pages.length) {
          return pages.slice(-radius * 2 - 1);
        } else {
          return pages.slice(activeIndex - radius, activeIndex + radius + 1);
        }
      }

      return pages;
    }

    setSelectedPages(calculatePages());
  }, [totalPages, activePage]);

  return selectedPages;
}