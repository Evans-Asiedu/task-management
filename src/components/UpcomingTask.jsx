import React, { useState, useEffect } from "react";
import { data } from "src/data";
import SliderHeader from "components/SliderHeader";
import SliderBody from "components/SliderBody";
import TaskCard from "components/TaskCard";

const UpcomingTask = () => {
  const tasks = data.tasks;
  const [startIndex, setStartIndex] = useState(0);
  const [taskPerView, setTaskPerView] = useState(1);

  // function to check screen size
  useEffect(() => {
    const updateTaskPerView = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setTaskPerView(2);
      } else {
        setTaskPerView(1);
      }
    };

    updateTaskPerView();
    window.addEventListener("resize", updateTaskPerView);

    return () => window.removeEventListener("resize", updateTaskPerView);
  }, []);

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
    <div className="max-w-[327px] lg:max-w-[688px]">
      {/* Header */}
      <SliderHeader
        title={"Upcoming Task"}
        onNext={handleNext}
        onPrevious={handlePrevious}
        start={start}
        current={current}
        end={end}
      />
      <div className="overflow-hidden relative">
        <SliderBody
          slides={tasks}
          startIndex={startIndex}
          slidePerView={taskPerView}
          component={taskCard}
        />
      </div>
    </div>
  );
};

export default UpcomingTask;
