import DefaultSelect from "@/components/Selects/default-select";
import { SelectItem } from "@/components/ui/select";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Default Select",
  component: DefaultSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DefaultSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    placeholder: "Select",
    value: "",
    setValue: () => {},
    children: (
      <>
        <SelectItem value="name">Name</SelectItem>
        <SelectItem value="popular">Popular</SelectItem>
        <SelectItem value="activity">Activity</SelectItem>
      </>
    ),
  },
};
