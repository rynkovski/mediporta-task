import { TagsTable } from "@/components/Tables/tags-table";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Tags Table",
  component: TagsTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TagsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    columns: [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "count",
        header: "Posts",
      },
    ],
    data: [
      { name: "example", count: 1 },
      { name: "example2", count: 2 },
      { name: "example3", count: 2 },
    ],
  },
};
