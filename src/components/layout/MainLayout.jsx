import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 transition-all duration-300 ease-in-out min-h-screen md:ml-[252px] max-w-7xl">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
