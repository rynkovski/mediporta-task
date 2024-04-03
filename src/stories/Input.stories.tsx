import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    className: "max-w-full md:max-w-sm",
    placeholder: "Filter by tag name",
    onChange: () => {},
  },
};
