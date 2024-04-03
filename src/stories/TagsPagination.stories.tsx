import TagsPagination from "@/components/Paginations/tags-pagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Tags Pagination",
  component: TagsPagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TagsPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    page: 1,
    hasMore: true,
    setPage: (page) => {
      page;
    },
  },
};
