import React, { useState, useEffect } from "react";
import { data } from "src/data";
import SliderHeader from "components/SliderHeader";
import SliderBody from "components/SliderBody";

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
  let tasksToShow = tasks.slice(startIndex, current);

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      updateTaskToShow();
    }
  };

  const handleNext = () => {
    if (startIndex + taskPerView < tasks.length) {
      setStartIndex(startIndex + 1);
      updateTaskToShow();
    }
  };

  const updateTaskToShow = () => {
    tasksToShow = tasks.slice(startIndex, startIndex + taskPerView);
  };

  return (
    <div className="max-w-[327px] lg:max-w-[688px] mx-4">
      {/* Header */}
      <SliderHeader
        title={"Upcoming Task"}
        onNext={handleNext}
        onPrevious={handlePrevious}
        start={start}
        current={current}
        end={end}
      />
      <SliderBody slides={tasksToShow} />
    </div>
  );
};

export default UpcomingTask;
