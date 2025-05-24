
const HelpCenter = ({ className }) => {
  return (
    <div className={`${className} max-w-[188px] h-[274px] relative`}>
      <div className="h-[160px] w-[160px] rounded-full bg-primary-0/10 absolute -translate-y-1/2 -translate-x-3/5 z-10"></div>
      <div className="h-[160px] w-[160px] rounded-full bg-primary-0/10 absolute bottom-0 right-0 translate-y-11/20 translate-x-3/5 z-10"></div>
      <div className="h-[52px] w-[52px] rounded-full bg-primary-0 border border-primary-100 absolute left-1/2 -translate-x-1/2 z-10">
        <i
          className="absolute top-0.5 left-1/2 -translate-x-1/2 fa fa-question-circle fa-3x"
          aria-hidden="true"
        ></i>
      </div>
      <div className="h-[248px] absolute bottom-0 bg-secondary-500 flex flex-col rounded-r-1 p-3">
        <div className="flex flex-col flex-grow justify-center">
          <h1 className="text-center font-semibold text-primary-0">Help Center</h1>
          <p className="text-center text-xs mt-3 text-primary-0">
            Having trouble in learning. <br /> Please contact us for more
            questions
          </p>
        </div>
        <button className="text-xs bg-primary-0 text-seondary-500 rounded-r-1 py-2 px-2.5 cursor-pointer">
          Go to Help Center
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
