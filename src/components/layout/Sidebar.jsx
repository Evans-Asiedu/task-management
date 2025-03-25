import { useState } from "react";
import { data } from "src/data";
import HelpCenter from "components/HelpCenter";
// import { useLocation } from "react-router-dom";

export default function Sidebar({
  isOpen: isSidebarOpen,
  setIsOpen: setIsSidebarOpen,
}) {
  // const location = useLocation();
  // const isActive = location.pathname === item.path
  const isActive = false;

  return (
    <>
      {/* Sidebar */}

      <aside
        className={`flex flex-col fixed top-0 left-0 min-h-screen p-9 border-r border-r-n-1 bg-white transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0 w-[252px]" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <button className="sm:hidden" onClick={() => setIsSidebarOpen(false)}>
          <i
            className="fa fa-close fa-lg text-secondary-300 absolute top-3.5 right-3.5"
            aria-hidden="true"
          ></i>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <img src="src/assets/favicon.svg" alt="Logo" />
          <span className="text-3xl font-semibold text-secondary-500">
            Neugas
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-col items-center gap-6 ">
            {data.navigation.map((item) => (
              <li key={item.path} className="self-start w-full">
                <a
                  href={item.path}
                  className={`flex items-center gap-3 py-2.5 px-5 rounded-[10px] transition text-secondary-300 text-sm
                      ${isActive ? "bg-n-1 text-secondary-500" : "bg-white"}
                `}
                >
                  <i className={`fa ${item.icon} fa-2x`} aria-hidden="true"></i>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Help Center */}
        <HelpCenter className="mt-auto" />
      </aside>
    </>
  );
}
