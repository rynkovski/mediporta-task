import { TagsData } from "@/types/tags.type";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

type Props = {
  page: number;
  pageSize: string;
  order: string;
  sort: string;
  name?: string;
};

export const getTags = async ({ page, pageSize, order, sort, name }: Props): Promise<TagsData> => {
  const response: AxiosResponse<TagsData> = await api.get(
    `tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&inname=${name}&site=stackoverflow`
  );
  return response.data;
};

export const useGetTags = ({ page, pageSize, order, sort, name }: Props) => {
  const queryFN = () => getTags({ page, pageSize, order, sort, name });
  return useQuery({
    queryKey: ["tags"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: 0,
  });
};
