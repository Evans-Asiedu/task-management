import { data } from "src/data";
import RunningTask from "components/RunningTask";
import { Calendar } from "components/Calendar";

import TodayTask from "components/TodayTask";
import SideMenu from "components/SideMenu";
import UpcomingTask from "./components/UpcomingTask";
import ActivityTracker from "./components/ActivityTracker";
//import ActivityTrackerDefaultToolkit from "./components/ActivityTrackerDefaultToolkit";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[1440px] ">
        <div className="flex flex-col lg:flex-row gap-0">
          <div className="w-full lg:w-270/1440 bg-white">
            <SideMenu />

          </div>
          <div className="w-full bg-light-gray">
            <div className="flex gap-2 flex-wrap">
              <RunningTask />
              <ActivityTracker />
              {/* <ActivityTrackerDefaultToolkit /> */}
            </div>

            {/* <UpcomingTask /> */}
          </div>
          <div className="w-full lg:w-436/1440 mx-4">
            <Calendar />
            <TodayTask />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
