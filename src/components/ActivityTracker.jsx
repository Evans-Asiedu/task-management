import React, { useState, useRef, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "S", tasks: 1 },
  { day: "M", tasks: 2 },
  { day: "T", tasks: 1 },
  { day: "W", tasks: 2 },
  { day: "T", tasks: 3 },
  { day: "F", tasks: 2 },
  { day: "S", tasks: 2 },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex justify-center w-[60px] bg-secondary-500 py-1 rounded-r-1 relative ">
        <p className="text-primary-0 text-sm">{payload[0].value} Task</p>
        <div className="w-[20px] h-[20px] absolute left-5 top-3 rotate-45 -z-10 bg-secondary-500"></div>
      </div>
    );
  }

  return null;
};

const ActivityTracker = () => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [xAxisInterval, setXAxisInterval] = useState(0); // Control Y-axis interval
  const chartContainerRef = useRef(null);

  // Track chart container width and adjust Y-axis interval
  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        const width = chartContainerRef.current.offsetWidth;

        // Adjust interval based on width
        if (width < 400) {
          setXAxisInterval(1); // Show fewer ticks on small devices
        } else {
          setXAxisInterval(0); // Show all ticks on larger devices
        }
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full max-w-md md:max-w-lg h-auto bg-n-1 flex flex-col  items-center gap-3 p-6 rounded-r-1"
      ref={chartContainerRef}
    >
      <div className="w-full flex justify-between items-center">
        <h2 className="text-base font-semibold text-secondary-500">Activity</h2>
        <div className="flex items-start justify-center gap-1">
          <select className=" w-full border-none outline-none text-xs p-2 rounded-r-1 text-secondary-500">
            <option value="This Week">This Week</option>
            <option value="This Week">Today</option>
          </select>
        </div>
      </div>

      <div className="pt-6 pb-4 pr-6 w-full h-[150px] bg-primary-0 rounded-r-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10 }}
            onMouseMove={(e) => {
              if (e.activePayload?.length) {
                const { chartX, chartY } = e;
                setTooltipPosition({ x: chartX - 36, y: chartY - 60 });
              }
            }}
          >
            {/* Define an SVG filter for the shadow */}
            <defs>
              <filter
                id="lineShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="2"
                  dy="10"
                  stdDeviation="2"
                  floodColor="rgba(0, 0, 0, 0.2)"
                />
              </filter>
            </defs>

            <XAxis
              dataKey="day"
              interval={xAxisInterval}
              axisLine={false}
              tickLine={false}
              padding={{ left: 10 }}
              tick={{
                fontSize: 12, // Set font size for X-axis labels
              }}
            />

            <YAxis
              tickCount={4}
              interval={0}
              domain={[1, "dataMax"]}
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              padding={{ bottom: 10 }}
              tick={{
                fontSize: 12, // Set font size for X-axis labels
              }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              position={tooltipPosition}
            />

            <Line
              type="monotone"
              dataKey="tasks"
              stroke={"var(--color-secondary-500)"}
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "var(--color-primary-0)",
                stroke: "var(--color-primary-500)",
                strokeWidth: 3,
              }}
              filter="url(#lineShadow)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityTracker;
