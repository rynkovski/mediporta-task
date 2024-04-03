import { ColumnDef } from "@tanstack/react-table";

export type Tag = {
    has_synonyms?: boolean;
    is_moderator_only?: boolean;
    is_required?: boolean;
    name: string;
    count: number;
}

export type Tags = Tag[];

export type TagsTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
  }

export type TagsData = {
    items: Tags;
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}
  