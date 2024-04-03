import TagsCard from "@/components/Cards/tags-card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Tags Card",
  component: TagsCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TagsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { name: "example", count: 999999 },
};
