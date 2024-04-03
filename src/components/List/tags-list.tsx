import { Tags } from "@/types/tags.type";
import TagsCard from "../Cards/tags-card";

type Props = {
  data: Tags | undefined;
};

function TagsList({ data }: Props) {
  return (
    <div className="grid items-stretch grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
      {data?.length ? (
        data.map(({ name, count }) => (
          <TagsCard key={name} name={name} count={count} />
        ))
      ) : (
        <p className="flex items-center justify-center">No results.</p>
      )}
    </div>
  );
}

export default TagsList;
