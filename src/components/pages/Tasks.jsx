import Header from "src/components/layout/Header";
import TasksListSlider from "components/TasksListSlider";
import { useSearch } from "src/context/SearchContext";
import { data } from "src/data";
import { useMemo } from "react";

const Tasks = () => {
  const { searchQuery } = useSearch();

  const filteredTasks = useMemo(() => {
    if (!searchQuery.trim()) {
      return data.tasks;
    }

    const query = searchQuery.toLowerCase().trim();
    return data.tasks.filter((task) => {
      const titleMatch = task.title?.toLowerCase().includes(query);
      const categoryMatch = task.category?.toLowerCase().includes(query);
      const descriptionMatch = task.description?.toLowerCase().includes(query);
      return titleMatch || categoryMatch || descriptionMatch;
    });
  }, [searchQuery]);

  return (
    <>
      <Header
        showActions={true}
        title="Tasks"
        searchPlaceholder="Search tasks"
      />
      <main className="h-full flex bg-n-2 ">
        <div className="p-6 lg:p-8 space-y-6 lg:space-y-8">
          <TasksListSlider title="Time Limit" tasks={filteredTasks} />
          <TasksListSlider title="New Task" tasks={filteredTasks} />
        </div>
      </main>
    </>
  );
};

export default Tasks;
