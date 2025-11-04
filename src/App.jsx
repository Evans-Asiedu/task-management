import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "src/components/pages/Overview";
import Tasks from "components/pages/Tasks";
import TaskDetail from "components/pages/TaskDetail";
import Mentors from "components/pages/Mentors";
import Settings from "components/pages/Settings";
import NotFound from "components/pages/NotFound";
import { SidebarProvider } from "src/context/SidebarContext";
import { ToastProvider } from "src/context/ToastContext";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <div id="app" className="flex flex-col md:flex-row">
      <BrowserRouter>
        <SidebarProvider>
          <ToastProvider>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Overview />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tasks/:id" element={<TaskDetail />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ToastProvider>
        </SidebarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
