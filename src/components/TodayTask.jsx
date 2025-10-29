import React from "react";
import { useNavigate } from "react-router-dom";
import TaskCard from "src/components/cards/TaskCard";
import { TodayTaskData } from "src/data";

const TodayTask = () => {
  return (
    <div className="bg-primary-0 rounded-r-1 p-6">
      <TaskHeader name="Today Task" />
      <TaskCard task={TodayTaskData} className="!p-0 " />
      <div className="border-b border-secondary-100 my-6"></div>
      <TaskDetails />
    </div>
  );
};

const TaskDetails = () => {
  const navigate = useNavigate();

  const handleGoToDetail = () => {
    navigate(`/tasks/${TodayTaskData.id}`);
  };

  return (
    <>
      <div className="my-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-semibold">Detail Task</p>
          <p className="text-secondary-400 text-sm">
            {TodayTaskData.categories?.[0]}
          </p>
        </div>
        <ul className="mt-4 space-y-4">
          {TodayTaskData.assessment?.map((assessmentItem, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="bg-n-1 text-xs px-3 py-1.5 rounded-r-1">
                {index + 1}
              </span>
              <p className="text-sm text-secondary-500">{assessmentItem}</p>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleGoToDetail}
        className="bg-primary-500 text-primary-0 w-full py-3 rounded-r-1 mt-6 cursor-pointer hover:bg-primary-600"
      >
        Go To Detail
      </button>
    </>
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
