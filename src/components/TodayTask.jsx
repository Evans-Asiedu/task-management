import React from "react";
import TaskCard from "components/TaskCard";
import TaskDetails from "components/TaskDetails";
import { data } from "src/data";

const TodayTask = () => {
  const task = data.tasks[1];

  return (
    <div className="bg-primary-0 rounded-r-1 p-6">
      <TaskHeader name="Today Task" />
      <TaskCard task={task} className="!p-0 "/>
      <div className="border-b border-secondary-100 my-6"></div>
      <TaskDetails />
    </div>
  );
};

const TaskHeader = ({ name }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold">{name}</h2>
      <button className="text-secondary-400 text-lg">
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default TodayTask;
