import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "src/components/pages/Overview";
import Tasks from "components/pages/Tasks";
import Settings from "components/pages/Settings";
import NotFound from "components/pages/NotFound";
import { SidebarProvider } from "src/context/SidebarContext";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <div id="app" className="flex flex-col md:flex-row">
      <BrowserRouter>
        <SidebarProvider>

            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Overview />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>

        </SidebarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
