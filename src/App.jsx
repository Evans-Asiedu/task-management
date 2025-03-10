import { data } from "src/data";
import RunningTask from "./components/RunningTask";
import { Calendar } from "./components/Calendar";
import { TaskCard } from "./components/TaskCard";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <>
      <Calendar />
      <RunningTask />
      <TaskCard />
      <TaskDetails />
    </>
  );
}

export default App;
