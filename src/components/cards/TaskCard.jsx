import { useNavigate } from "react-router-dom";
import { displayTime } from "src/utils/formatDate";

const TaskCard = ({ task, className = "" }) => {
  const { id, title, imageUrl, category, progress, createdAt, assignees } =
    task;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tasks/${id}`);
  };

  return (
    <div
      className={`bg-primary-0 rounded-r-1 p-4 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {/* Image Section */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full rounded-r-1 object-fit"
      />

      {/* Task Title & Role */}
      <h3 className="text-md font-semibold mt-3">{title}</h3>
      <p className="text-secondary-400 text-sm">{category}</p>

      {/* Progress Bar */}
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <p className="text-sm">Progress</p>
          <span className="text-primary-500 text-sm font-medium">
            {progress}%
          </span>
        </div>

        <div className="relative w-full bg-primary-200 h-2 rounded-full mt-1">
          {/* Progress Fill */}
          <div
            className="bg-primary-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>

          {/* Circular Indicator */}
          <div
            className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 
                        w-4 h-4 bg-primary-500 border-2 border-white rounded-full shadow-md"
            style={{ left: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Time & Avatars */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center space-x-2">
          <i
            className="fa fa-clock-o fa-lg text-secondary-400"
            aria-hidden="true"
          ></i>
          <span className="text-xs text-secondary-400">{displayTime(createdAt)}</span>
        </div>
        <div className="flex -space-x-2">
          {assignees?.length > 0 &&
            assignees.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                className="rounded-full border border-primary-0"
                alt={`Team member ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
