import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/layout/Header";
import Overview from "src/components/pages/Overview";
import Sidebar from "components/layout/Sidebar";
import Tasks from "components/pages/Tasks";
import Settings from "components/pages/Settings";
import NotFound from "components/pages/NotFound";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return window.matchMedia("(min-width: 768px)").matches;
  });

  return (
    <div id="app" className="flex flex-col md:flex-row">
      <BrowserRouter>
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
          <Routes>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Overview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
