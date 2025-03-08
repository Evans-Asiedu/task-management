import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

export function Calendar() {
  const [selected, setSelected] = useState(Date.now());
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      classNames={{
        root: `${defaultClassNames.root} font-semibold text-xs text-secondary-500 bg-primary-0 rounded-[10px] p-5 inline-block`,
        caption_label: `${defaultClassNames.caption_label} text-sm`,
      }}
    />
  );
}
