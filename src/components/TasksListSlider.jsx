import { data } from "src/data";
import Slider from "src/components/slider/Slider";
import TaskCard from "src/components/cards/TaskCard";

const TasksListSlider = ({ title = "", tasks }) => {
  const tasksToDisplay = tasks || data.tasks;

  const taskCard = (task) => {
    return <TaskCard task={task} />;
  };

  return (
    <Slider
      title={title}
      data={tasksToDisplay}
      component={taskCard}
      itemsPerViewDesktop={2}
      itemsPerViewMobile={1}
    />
  );
};

export default TasksListSlider;
