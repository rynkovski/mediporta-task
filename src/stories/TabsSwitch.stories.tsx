import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import { ListIcon, TableIcon } from "lucide-react";

const meta = {
  title: "Components/Tabs Switch",
  component: Tabs,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue="list">
      <TabsList>
        <TooltipProvider>
          <TabsTrigger value="list">
            <Tooltip>
              <TooltipTrigger asChild>
                <ListIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>List</p>
              </TooltipContent>
            </Tooltip>
          </TabsTrigger>
          <TabsTrigger value="table">
            <Tooltip>
              <TooltipTrigger asChild>
                <TableIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>Table</p>
              </TooltipContent>
            </Tooltip>
          </TabsTrigger>
        </TooltipProvider>
      </TabsList>
    </Tabs>
  ),
};
