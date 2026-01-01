import Header from "src/components/layout/Header";
import TasksSwiper from "src/components/swipers/TasksSwiper";
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
          <TasksSwiper tasks={filteredTasks} headerLabel="Time Limit" />
          <TasksSwiper tasks={filteredTasks} headerLabel="New Task" />
        </div>
      </main>
    </>
  );
};

export default Tasks;
