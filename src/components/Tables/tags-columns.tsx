import { Tag } from "@/types/tags.type";
import { ColumnDef } from "@tanstack/react-table";

export const TagsColumns: ColumnDef<Tag>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "count",
    header: "Posts",
  },
];
