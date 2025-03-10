import React from "react";

const TaskDetails = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">Detail Task</p>
          <p className="text-gray-500 text-sm">UI/UX Designer</p>
        </div>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center space-x-2">
            <span className="bg-gray-300 text-xs px-2 py-1 rounded-full">
              1
            </span>
            <p className="text-sm">Understanding the tools in Figma</p>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-300 text-xs px-2 py-1 rounded-full">
              2
            </span>
            <p className="text-sm">Understand the basics of making designs</p>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-300 text-xs px-2 py-1 rounded-full">
              3
            </span>
            <p className="text-sm">Design a mobile application with Figma</p>
          </li>
        </ul>
      </div>
      {/* Go To Detail Button */}
      <button className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 cursor-pointer">
        Go To Detail
      </button>
    </div>
  );
};

export default TaskDetails;
