"use client";
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "~/components/ui/pagination";
import useGetPagesInRadius from "~/hooks/useGetPagesInRadius";

export default function PaginationComponent({
  total = 1,
}: {
  total: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageSize = 20;
  const radius = 2;
  const lastPage = Math.ceil(total / pageSize);
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const pages = useGetPagesInRadius(lastPage, page, radius);

  const getPageLink = (value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", value.toString());
    return pathname + "?" + params.toString();
  }

  if (total > 0) {
    return (
      <Pagination>
        <PaginationContent>
          {
            !pages.includes(1) && (
              <PaginationItem>
                <PaginationLink href={getPageLink(1)}>
                  <DoubleArrowLeftIcon />
                </PaginationLink>
              </PaginationItem>
            )
          }
          <PaginationItem>
            <PaginationPrevious href={
              // @ts-ignore: Object is possibly 'null'.
              getPageLink(pages[0] > 1 ? pages[0] - 1 : 1)
            }
              disabled={page === 1} />
          </PaginationItem>

          {/* In between page */}
          {pages.map((pageItem, i) => (
            <PaginationItem key={i}>
              <PaginationLink isActive={pageItem === page} href={getPageLink(pageItem)}>{pageItem}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href={getPageLink(page + 1 < lastPage ? page + 1 : lastPage)} disabled={page === lastPage} />
          </PaginationItem>
          {
            !pages.includes(lastPage) && (
              <PaginationItem>
                <PaginationLink href={getPageLink(lastPage)}>
                  <DoubleArrowRightIcon />
                </PaginationLink>
              </PaginationItem>
            )
          }
        </PaginationContent>
      </Pagination>
    );
  }
}