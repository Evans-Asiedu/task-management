import React, { useState } from "react";

const RunningTaskProgressBar = ({ progress = 45, size = 70, strokeWidth = 5 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-secondary-500 fill-transparent"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="stroke-[var(--color-primary-500)]  fill-transparent transition-all duration-500 ease-in-out"
        />
      </svg>
      {/* Progress Text */}
      <div className="absolute text-center">
        <span className="text-lg font-bold text-[var(--color-primary-0)] ">{progress}%</span>
      </div>
    </div>
  );
};

export default RunningTaskProgressBar;