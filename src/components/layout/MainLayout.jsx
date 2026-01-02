import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 transition-all duration-300 ease-in-out min-h-screen md:ml-[235px] w-full md:w-[calc(100dvw-252px)]">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
