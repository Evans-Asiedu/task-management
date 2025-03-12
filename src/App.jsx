import { data } from "src/data";
import { useState } from "react";
import RunningTask from "components/RunningTask";
import { Calendar } from "components/Calendar";

import TodayTask from "components/TodayTask";
import SideMenu from "components/SideMenu";

function App() {
  return (
    <>
      <SideMenu />
      <Calendar />
      <RunningTask />
      <TodayTask />
    </>
  );
}

export default App;
