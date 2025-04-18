import React, { Component } from "react";

const SliderBody = ({ slides, startIndex, slidePerView, component }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex flex-wrap transition-transform duration-500 ease-in-out"
        style={{
          width: `${(slides.length / slidePerView) * 100}%`,
          transform: `translateX(-${(startIndex * 100) / slides.length}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full md:w-1/2 px-2"
            style={{
              width: `${100 / slides.length}%`,
            }}
          >
            {component(slide)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderBody;
