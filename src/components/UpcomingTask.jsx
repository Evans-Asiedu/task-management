import { data } from "src/data";
import Slider from "src/components/slider/Slider";
import TaskCard from "components/TaskCard";

const UpcomingTask = () => {
  const tasks = data.tasks;

  const taskCard = (task) => {
    return <TaskCard task={task} />;
  };

  return (
    <Slider
      title="Upcoming Task"
      data={tasks}
      component={taskCard}
      itemsPerViewDesktop={2}
      itemsPerViewMobile={1}
    />
  );
};

export default UpcomingTask;
