export function TaskCard() {
  return (
    <div className="bg-white w-80 rounded-xl shadow-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Task Today</h2>
        <button className="text-gray-500 text-lg">⋯</button>
      </div>

      {/* Image Section */}
      <img
        src="/Image.png"
        alt="Task Preview"
        className="w-full h-32 rounded-lg object-fit"
      />

      {/* Task Title & Role */}
      <h3 className="text-md font-semibold mt-3">
        Creating Awesome Mobile Apps
      </h3>
      <p className="text-gray-500 text-sm">UI/UX Designer</p>

      {/* Progress Bar */}
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Progress</p>
          <span className="stroke-primary-500 text-sm font-medium">90%</span>
        </div>

        <div className="relative w-full bg-gray-200 h-2 rounded-full mt-1">
          {/* Progress Fill */}
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "90%" }}
          ></div>

          {/* Circular Indicator */}
          <div
            className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 
                        w-4 h-4 bg-blue-400 border-2 border-white rounded-full shadow-md"
            style={{ left: "90%" }}
          ></div>
        </div>
      </div>

      {/* Time & Avatars */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">🕧 1 Hour</span>
        </div>
        <div className="flex -space-x-2">
          <img
            src="/avatar1.jpg"
            className="w-6 h-6 rounded-full border border-white"
          />
          <img
            src="/avatar2.jpg"
            className="w-6 h-6 rounded-full border border-white"
          />
          <img
            src="/avatar3.jpg"
            className="w-6 h-6 rounded-full border border-white"
          />
        </div>
      </div>

      {/* Go To Detail Button */}
    </div>
  );
}
