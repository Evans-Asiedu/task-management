import { useState } from "react";
import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Sidebar from "components/layout/Sidebar";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return window.matchMedia("(min-width: 768px)").matches;
  });

  return (
    <div id="app" className="flex flex-col md:flex-row">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out min-h-screen
        ${isSidebarOpen ? "md:ml-[252px]" : ""}`}
      >
        <Header
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          showActions={false}
          title="Overview"
        />
        <Main />
      </div>

    </div>
  );
}

export default App;
