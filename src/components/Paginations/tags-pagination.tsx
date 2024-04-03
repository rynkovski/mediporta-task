import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { Dispatch } from "react";

type Props = {
  page: number;
  hasMore: boolean;
  setPage: Dispatch<React.SetStateAction<number>>;
};

function TagsPagination({ page, hasMore, setPage }: Props) {
  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
            onClick={() => setPage(page - 1)}
          />
        </PaginationItem>
        <PaginationItem className="hidden sm:block">
          <Button variant="secondary">{page}</Button>
        </PaginationItem>
        <PaginationItem className="hidden sm:block">
          <Button
            variant={"ghost"}
            className={!hasMore ? "hidden" : undefined}
            onClick={() => setPage(page + 1)}
          >
            {page + 1}
          </Button>
        </PaginationItem>
        <PaginationItem className="hidden sm:block">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={
              !hasMore ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
            onClick={() => setPage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default TagsPagination;
