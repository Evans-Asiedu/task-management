import { data } from "src/data";
import RunningTask from "./components/RunningTask";
import { Calendar } from "./components/Calendar";
import { TaskCard } from "./components/task_card";

function App() {
  return (
    <>
      <Calendar />
      <RunningTask />
      <TaskCard/>
    </>
  );
}

export default App;
