import React, { useState, useEffect } from "react";
import { data } from "src/data";
import SliderHeader from "components/SliderHeader";
import SliderBody from "components/SliderBody";
import TaskCard from "components/TaskCard";

const UpcomingTask = ({ taskPerViewOverride,sliderHeaderProps }) => {
  const tasks = data.tasks;
  const [startIndex, setStartIndex] = useState(0);
  const [taskPerView, setTaskPerView] = useState(taskPerViewOverride || 1);

  // function to check screen size
  useEffect(() => {
    const updateTaskPerView = () =>{
      const isLargeScreen = window.matchMedia("(min-width:1024px)").matches;

      if (isLargeScreen && taskPerViewOverride) {
        setTaskPerView(taskPerViewOverride)
      }else{
        setTaskPerView(1)
      }
    }
    

    updateTaskPerView();
    window.addEventListener("resize", updateTaskPerView);

    return () => window.removeEventListener("resize", updateTaskPerView);
  }, [taskPerViewOverride]);

  const start = startIndex + 1;
  const current = startIndex + taskPerView;
  const end = tasks.length;

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

  const taskCard = (task) => {
    return <TaskCard task={task} />;
  };

  return (
    <div>
      <SliderHeader
        title={"Upcoming Task"}
        onNext={handleNext}
        onPrevious={handlePrevious}
        start={start}
        current={current}
        end={end}
        {...sliderHeaderProps}
      />
      <SliderBody
        slides={tasks}
        startIndex={startIndex}
        slidePerView={taskPerView}
        component={taskCard}
      />
    </div>
  );
};

export default UpcomingTask;
