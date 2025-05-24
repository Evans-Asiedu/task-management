import { useState } from "react";
import { getDefaultClassNames, DayPicker } from "react-day-picker";

export function Calendar() {
  const [selected, setSelected] = useState(Date.now());
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      classNames={{
        root: `${defaultClassNames.root} w-full font-semibold text-xs text-secondary-500 bg-primary-0 rounded-r-1 p-6 inline-block`,
        caption_label: `${defaultClassNames.caption_label} text-sm`,
      }}
    />
  );
}

// export default HelpCenter;
