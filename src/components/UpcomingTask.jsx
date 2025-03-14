import React from "react";
import Header from "./Header";
import { TaskCard } from "./TaskCard";

const UpcomingTask = () => {
  const tasks = [1, 2];
  return (
    <div className="max-w-[688px] mx-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold mx-1">Upcoming Task</h2>
        <button className="text-gray-500 text-lg mx-1">
          <i className="fa fa-angle-left fa-2x mx-3" aria-hidden="true"></i>
          <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
        </button>
      </div>
      <div className="flex flex-row">
        {tasks.map((task) => (
          <div className="max-w-[328px] mx-2">
            {" "}
            <TaskCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTask;
