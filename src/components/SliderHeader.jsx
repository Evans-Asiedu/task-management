import React from "react";

const SliderHeader = ({ title, onPrevious, onNext, start, current, end }) => {
  return (
    <div className="max-w-screen">
      <div className="flex justify-between mb-3">
        <h2 className="text-lg font-semibold ">{title}</h2>
        <span className="text-secondary-400 text-lg">
          <button
            className={`fa fa-angle-left fa-2x mx-3 ${
              start === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={onPrevious}
            disabled={start === 1}
          ></button>
          <button
            className={`fa fa-angle-right fa-2x ${
              current >= end
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={onNext}
            disabled={current >= end}
          ></button>
        </span>
      </div>
    </div>
  );
};

export default SliderHeader;
