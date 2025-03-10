import React, { Component } from "react";
import { TaskCard } from "./TaskCard";
import TaskDetails from "./TaskDetails";
import Header from "./Header";

const TodayTask = () => {
  return (
    <div className="bg-white w-80 rounded-xl shadow-lg p-4">
      <Header name="Today Task" />
      <TaskCard />
      <TaskDetails />
    </div>
  );
};

export default TodayTask;
