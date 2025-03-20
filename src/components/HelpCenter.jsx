import React from "react";

const HelpCenter = () => {
  return (
    <div className="max-w-[188px] h-[274px] relative">
      <div className="h-[52px] w-[52px] bg-white rounded-full border border-primary-100 absolute left-1/2 -translate-x-1/2 z-1">
        <i
          class="absolute top-0.5 left-1/2 -translate-x-1/2 fa fa-question-circle fa-3x"
          aria-hidden="true"
        ></i>
      </div>
      <div className="h-[248px] absolute bottom-0 bg-secondary-500 flex flex-col rounded-2xl p-3">
        <div className="flex flex-col flex-grow justify-center">
          <h1 className="text-center font-semibold text-white">Help Center</h1>
          <p className="text-center text-[12px] mt-3 text-white">
            Having trouble in learning. <br /> Please contact us for more
            questions
          </p>
        </div>
        <button className="text-[12px] bg-white text-seondary-500 rounded-2xl py-2 px-2.5 cursor-pointer">
          {" "}
          Go to Help Center
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
