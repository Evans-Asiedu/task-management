import React from "react";

const SliderHeader = ({ title, onPrevious, onNext, start, current, end }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold mx-1">{title}</h2>
      <span className="text-gray-500 text-lg mx-1">
        <button
          className={`fa fa-angle-left fa-2x mx-3 ${
            start === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={onPrevious}
          disabled={start === 1}
        ></button>
        <button
          className={`fa fa-angle-right fa-2x ${
            current >= end ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={onNext}
          disabled={current >= end}
        ></button>
      </span>
    </div>
  );
};

export default SliderHeader;
