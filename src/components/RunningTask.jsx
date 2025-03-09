
import React, { useState } from 'react'

const RunningTask = () => {
  const [progress, setProgress] = useState(45);
  const size = 70;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className='m-4 w-[327px] h-[124px] sm:w-[200px] sm:h-[220px] flex sm:flex-col justify-between shadow-xl p-4 bg-secondary-900 text-white rounded-[10px] transition duration-500' >

      <div className='flex flex-col gap-[18px]'>
        <h2 className='text-[16px] font-semibold text-primary-0 '>Running Task</h2>
        <h2 className='text-[32px] font-semibold text-primary-0 '>65</h2>
      </div>

      <div className='flex items-center gap-[18px]'>
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
              className="stroke-primary-500  fill-transparent transition-all duration-500 ease-in-out"
            />
          </svg>
          {/* Progress Text */}
          <div className="absolute text-center">
            <span className="text-lg font-bold text-primary-0">{progress}%</span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[20px] font-bold'>100</h2>
          <p className='text-[14px] font-bold text-secondary-300 '>Task</p>
        </div>
      </div>
    </div>
  )
}

export default RunningTask
