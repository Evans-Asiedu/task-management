
const TaskDetails = () => {
  return (
    <>
      <div className="my-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-semibold">Detail Task</p>
          <p className="text-secondary-400 text-sm">UI/UX Designer</p>
        </div>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center space-x-3">
            <span className="bg-n-1 text-xs px-3 py-1.5 rounded-[10px]">1</span>
            <p className="text-sm text-secondary-500">
              Understanding the tools in Figma
            </p>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-n-1 text-xs px-3 py-1.5 rounded-[10px]">2</span>
            <p className="text-sm text-secondary-500">
              Understand the basics of making designs
            </p>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-n-1 text-xs px-3 py-1.5 rounded-[10px]">3</span>
            <p className="text-sm text-secondary-500">
              Design a mobile application with Figma
            </p>
          </li>
        </ul>
      </div>
      <button className="bg-primary-500 text-primary-0 w-full py-3 rounded-[10px] mt-6 cursor-pointer hover:bg-primary-600">
        Go To Detail
      </button>
    </>
  );
};

export default TaskDetails;
