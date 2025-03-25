import { useState } from "react";
import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Sidebar from "components/layout/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div id="app" className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out min-h-screen
        ${isSidebarOpen ? "md:ml-[252px]" : ""}`}
      >
        <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <Main />
      </div>

      {/* <div className="container mx-auto max-w-[1440px] ">
        <div className="flex flex-col lg:flex-row gap-0">
          <div className="w-full lg:w-270/1440 bg-white">
            <SideMenu />

          </div>
          <div className="w-full bg-light-gray">
            <div className="flex gap-2 flex-wrap">
              <RunningTask />
              <ActivityTracker />
            </div>

            <UpcomingTask />
          </div>
          <div className="w-full lg:w-436/1440 mx-4">
            <Calendar />
            <TodayTask />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
