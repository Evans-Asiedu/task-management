import { timeAgo } from "src/utils/formatDate";

const TaskCard = ({ task }) => {
  const avatars = [
    "/avatar1.png",
    "/avatar2.png",
    "/avatar3.png",
    "/avatar4.png",
    "/avatar5.png",
  ];

  return (
    <div className="w-[327px] bg-white rounded-xl p-4">
      {/* Image Section */}
      <img
        src={task.imageUrl}
        alt={task.title}
        className="w-full h-32 rounded-lg object-fit"
      />

      {/* Task Title & Role */}
      <h3 className="text-md font-semibold mt-3">{task.title}</h3>
      <p className="text-secondary-400 text-sm">{task.category}</p>

      {/* Progress Bar */}
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Progress</p>
          <span className="text-primary-500 text-sm font-medium">90%</span>
        </div>

        <div className="relative w-full bg-primary-200 h-2 rounded-full mt-1">
          {/* Progress Fill */}
          <div
            className="bg-primary-500 h-2 rounded-full"
            style={{ width: "90%" }}
          ></div>

          {/* Circular Indicator */}
          <div
            className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 
                        w-4 h-4 bg-primary-500 border-2 border-white rounded-full shadow-md"
            style={{ left: "90%" }}
          ></div>
        </div>
      </div>

      {/* Time & Avatars */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center space-x-2">
          <i
            className="fa fa-clock-o fa-lg text-secondary-400"
            aria-hidden="true"
          ></i>{" "}
          <span className="font-medium">{timeAgo(task.createdAt)}</span>
        </div>
        <div className="flex -space-x-2">
          {avatars.map((avator) => (
            <img src={avator} className="rounded-full border border-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
