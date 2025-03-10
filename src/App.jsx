import { data } from "src/data";
import RunningTask from "./components/RunningTask";
import { Calendar } from "./components/Calendar";

import TodayTask from "./components/TodayTask";

function App() {
  return (
    <>
      <Calendar />
      <RunningTask />
      <TodayTask />
    </>
  );
}

export default App;
