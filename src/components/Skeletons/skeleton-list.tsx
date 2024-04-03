import { Skeleton } from "../ui/skeleton";

function SkeletonList() {
  return (
    <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
      {
        Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-24" />
        ))
      }
    </div>
  );
}

export default SkeletonList;
