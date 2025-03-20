import React from "react";

const CardHeader = ({ start, current, total, onPrevious, onNext }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold mx-1">Upcoming Task</h2>
      <button className="text-gray-500 text-lg mx-1">
        <i
          className={`fa fa-angle-left fa-2x mx-3 ${
            start === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          aria-hidden="true"
          onClick={onPrevious}
        ></i>
        <i
          className={`fa fa-angle-right fa-2x ${
            current >= total
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          aria-hidden="true"
          onClick={onNext}
        ></i>
      </button>
    </div>
  );
};

export default CardHeader;
