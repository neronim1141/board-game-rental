import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectFromTo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="From/To" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>0</SelectLabel>
          <SelectItem value="apple">1</SelectItem>
          <SelectItem value="banana">2</SelectItem>
          <SelectItem value="blueberry">3</SelectItem>
          <SelectItem value="grapes">4</SelectItem>
          <SelectItem value="pineapple">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
