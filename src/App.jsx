import { data } from "src/data";
import { useState } from "react";
import RunningTask from "components/RunningTask";
import { Calendar } from "components/Calendar";

import TodayTask from "components/TodayTask";
import SideMenu from "components/SideMenu";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[1440px] ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-2">
            <SideMenu />
          </div>
          <div className="lg:col-span-7 px-4">
            <RunningTask />
          </div>
          <div className="lg:col-span-3">
            <Calendar />
            <TodayTask />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
