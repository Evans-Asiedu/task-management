import { data } from "src/data";
import RunningTask from "./components/RunningTask";
import { Calendar } from "./components/Calendar";
import { TaskCard } from "./components/task_card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500 font-jakarta">
        Test tailwind
      </h1>
      {data.loggedInUser.name}
      <img src={data.tasks[0].imageUrl} alt="" />
      <Calendar />
      <RunningTask />
      <TaskCard/>
    </>
  );
}

export default App;
