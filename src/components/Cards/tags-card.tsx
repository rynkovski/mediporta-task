import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  name: string;
  count: number;
};

function TagsCard({ name, count }: Props) {
  return (
    <Card className="text-center place-content-center rounded-sm min-h-32 shadow-md hover:shadow-xl">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default TagsCard;
