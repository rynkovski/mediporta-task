import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch } from "react";

type Props = {
  placeholder: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
};

function DefaultSelect({ placeholder, value, setValue, children }: Props) {
  return (
    <Select
      onValueChange={(value: string) => {
        setValue(value);
      }}
      defaultValue={value}
    >
      <SelectTrigger className="flex-1 sm:w-[100px] ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent side="bottom">{children}</SelectContent>
    </Select>
  );
}

export default DefaultSelect;
