import React, { Component } from "react";
import TaskCard from "components/TaskCard";

const SliderBody = ({ slides, startIndex, slidePerView }) => {
  return (
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${startIndex * (100 / slidePerView)}%)`,
      }}
    >
      {slides.map((slide) => (
        <div key={slide.id} className="mx-0 md:mx-2">
          <TaskCard task={slide} />
        </div>
      ))}
    </div>
  );
};

export default SliderBody;
