import React, { Component } from "react";
import TaskCard from "./TaskCard";

const SliderBody = ({ slides }) => {
  return (
    <div
      className="flex flex-row transition-transform duration-300 ease-in-out"
      // style={{
      //   transform: `translateX(-${startIndex * (100 / taskPerView)}%)`,
      // }}
    >
      {slides.map((slide) => (
        <div key={slide.id} className="max-w-[328px] flex-shrink-0 mx-2">
          {" "}
          <TaskCard task={slide} />
        </div>
      ))}
    </div>
  );
};

export default SliderBody;
