import React, { Component } from "react";
import TaskCard from "./TaskCard";
import TaskDetails from "./TaskDetails";

const TodayTask = () => {
  return (
    <div className="bg-white w-80 rounded-xl shadow-lg p-4">
      <TaskHeader name="Today Task" />
      <TaskCard />
      <TaskDetails />
    </div>
  );
};

const TaskHeader = ({ name }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold">{name}</h2>
      <button className="text-gray-500 text-lg">
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default TodayTask;
