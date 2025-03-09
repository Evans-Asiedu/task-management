
import React, { useState } from 'react'
import RunningTaskProgressBar from './RunningTaskProgressBar'

const RunningTask = () => {
  const [progress, setProgress] = useState(45);
  return (
    <div className='m-4 w-[327px] h-[124px] sm:w-[200px] sm:h-[220px] flex sm:flex-col justify-between shadow-xl p-4 bg-secondary-900 text-white rounded-[10px] transition duration-500' >

      <div className='flex flex-col gap-[18px]'>
        <h1 className='text-[16px] font-semibold text-primary-0 '>Running Task</h1>
        <h1 className='text-[32px] font-semibold text-primary-0 '>65</h1>
      </div>

      <div className='flex items-center gap-[18px]'>
        <RunningTaskProgressBar progress={progress} size={70} strokeWidth={5} />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[20px] font-bold'>100</h2>
          <p className='text-[14px] font-bold text-secondary-300 '>Task</p>
        </div>
      </div>
    </div>
  )
}

export default RunningTask
