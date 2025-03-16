import React, { useState } from "react";
import TaskCard from "./TaskCard";
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
    <div className="max-w-[688px] mx-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold mx-1">Upcoming Task</h2>
        <button className="text-gray-500 text-lg mx-1">
          <i
            className={`fa fa-angle-left fa-2x mx-3 ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            aria-hidden="true"
            onClick={handlePrevious}
          ></i>
          <i
            className={`fa fa-angle-right fa-2x ${
              startIndex + taskPerView >= tasks.length
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            aria-hidden="true"
            onClick={handleNext}
          ></i>
        </button>
      </div>
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
              <TaskCard task={task.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpcomingTask;
