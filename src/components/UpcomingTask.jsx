import React, { useState } from "react";
import TaskCard from "./TaskCard";
import CardHeader from "./CardHeader";
import { data } from "src/data";

const UpcomingTask = () => {
  const tasks = data.tasks;
  const [startIndex, setStartIndex] = useState(0);

  const taskPerView = window.innerWidth >= 1024 ? 2 : 1;

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + taskPerView < tasks.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="max-w-[327px] lg:max-w-[688px] mx-4">
      {/* Header */}
      <CardHeader
        start={startIndex}
        current={startIndex + taskPerView}
        total={tasks.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
      <div
        className="flex flex-row transition-transform duration-300 ease-in-out"
        // style={{
        //   transform: `translateX(-${startIndex * (100 / taskPerView)}%)`,
        // }}
      >
        {tasks
          .slice(startIndex, startIndex + taskPerView)
          .map((task, index) => (
            <div key={index} className="max-w-[328px] flex-shrink-0 mx-2">
              {" "}
              <TaskCard task={task} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpcomingTask;
