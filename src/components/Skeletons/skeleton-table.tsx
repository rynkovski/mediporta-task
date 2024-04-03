import { Skeleton } from "../ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function SkeletonTable() {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Skeleton className="h-8 " />
            </TableHead>
            <TableHead>
              <Skeleton className="h-8 " />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton className="h-8 " />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 " />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-8 " />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 " />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default SkeletonTable;
