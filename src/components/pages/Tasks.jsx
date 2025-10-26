import Header from "src/components/layout/Header";
import TasksListSlider from "components/TasksListSlider";

const Tasks = () => {
  return (
    <>
      <Header showActions={true} title="Tasks" />
      <main className="h-full flex bg-n-2 ">
        <div className="p-6 lg:p-8 space-y-6 lg:space-y-8">
          <TasksListSlider title="Time Limit" />
          <TasksListSlider title="New Task" />
        </div>
      </main>
    </>
  );
};

export default Tasks;
