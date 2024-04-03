import { useGetTags } from "@/actions/get-tags";
import { TagsColumns } from "../components/Tables/tags-columns";
import { TagsTable } from "@/components/Tables/tags-table";
import { useEffect, useState } from "react";
import { RefetchOptions } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp, ListIcon, TableIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TagsList from "@/components/List/tags-list";
import TagsPagination from "@/components/Paginations/tags-pagination";
import { useSearchParams } from "react-router-dom";
import SkeletonList from "@/components/Skeletons/skeleton-list";
import SkeletonTable from "@/components/Skeletons/skeleton-table";
import { Input } from "@/components/ui/input";
import { TagsData } from "@/types/tags.type";
import { SelectItem } from "@/components/ui/select";
import DefaultSelect from "@/components/Selects/default-select";

export default function TagsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(
    parseInt(searchParams.get("pageNumber") as string) || 1
  );
  const [pageSize, setPageSize] = useState(
    searchParams.get("pageSize") || "10"
  );
  const [order, setOrder] = useState(searchParams.get("order") || "desc");
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [name, setName] = useState(searchParams.get("name") || "");

  const {
    data: tagsData,
    isLoading: isLoadingTags,
    refetch: refetchTags,
  } = useGetTags({
    page,
    pageSize,
    order,
    sort,
    name,
  });

  useEffect(() => {
    setSearchParams({
      pageNumber: page.toString(),
      pageSize,
      order,
      sort,
      name,
    });
  }, [page, pageSize, order, sort, name]);

  useEffect(() => {
    refetchTags({ page, pageSize, order, sort, name } as RefetchOptions);
  }, [page, pageSize, order, sort, name]);

  return (
    <div className="container py-10 mx-auto">
      <Tabs defaultValue="list" className="w-full">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <Input
            placeholder="Filter by tag name"
            onChange={(event) => setName(event.target.value)}
            className="max-w-full md:max-w-sm"
          />
          <div className="flex flex-col items-end justify-end gap-6 sm:gap-2 sm:flex-row">
            <div className="flex flex-wrap items-center justify-between w-full gap-2 sm:w-fit sm:flex-nowrap">
              <DefaultSelect
                placeholder="Sort"
                value={sort}
                setValue={setSort}
                children={
                  <>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="activity">Activity</SelectItem>
                  </>
                }
              />
              <DefaultSelect
                placeholder="Order"
                value={order}
                setValue={setOrder}
                children={
                  <>
                    <SelectItem value="asc">
                      <span className="flex items-center gap-1">
                        Asc <ArrowUp size={16} />
                      </span>
                    </SelectItem>
                    <SelectItem
                      value="desc"
                      className="flex items-center gap-1"
                    >
                      <span className="flex items-center gap-1">
                        Desc <ArrowDown size={16} />
                      </span>
                    </SelectItem>
                  </>
                }
              />
              <DefaultSelect
                placeholder="Size"
                value={pageSize}
                setValue={setPageSize}
                children={
                  <>
                    {[10, 20, 50, 100].map((size) => (
                      <SelectItem key={size} value={`${size}`}>
                        {size}
                      </SelectItem>
                    ))}
                  </>
                }
              />
            </div>
            <div>
              <TabsList>
                <TooltipProvider>
                  <TabsTrigger value="list">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <ListIcon />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>List</p>
                      </TooltipContent>
                    </Tooltip>
                  </TabsTrigger>
                  <TabsTrigger value="table">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <TableIcon />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Table</p>
                      </TooltipContent>
                    </Tooltip>
                  </TabsTrigger>
                </TooltipProvider>
              </TabsList>
            </div>
          </div>
        </div>
        <TabsContent value="list">
          {isLoadingTags ? (
            <SkeletonList />
          ) : (
            <TagsList data={tagsData?.items} />
          )}
        </TabsContent>
        <TabsContent value="table">
          {isLoadingTags ? (
            <SkeletonTable />
          ) : (
            <TagsTable
              columns={TagsColumns}
              data={(tagsData as TagsData)?.items}
            />
          )}
        </TabsContent>
        <TagsPagination
          page={page}
          setPage={setPage}
          hasMore={(tagsData as TagsData)?.has_more}
        />
      </Tabs>
    </div>
  );
}
