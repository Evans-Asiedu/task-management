import { useState } from "react";
import { data } from "src/data";
import Button from "components/ui/Button";
import Dropdown from "components/ui/Dropdown";
import { timeAgo } from "src/utils/formatDate";
import useOutsideClick from "src/hooks/useOutsideClick";

const Header = ({ isOpen: isSidebarOpen, setIsOpen: setIsSidebarOpen }) => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifRef = useOutsideClick(() => setIsNotifOpen(false));
  const profileRef = useOutsideClick(() => setIsProfileOpen(false));

  const title = "Overview";
  const unreadNotifications = data.notifications.filter((n) => !n.read).length;

  return (
    <header className="h-[248px] md:h-[192px] bg-white p-8 flex flex-col gap-6">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* title */}
        <h1 className="text-2xl font-semibold text-secondary-500 self-start md:self-center">
          {title}
        </h1>

        <div className="flex justify-between md:justify-end items-center w-full">
          {/* Sidebar toggle button */}
          <Button
            icon="fa-bars"
            iconOnly
            className="md:hidden text-secondary-300 border-n-1 z-40"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <Button
                icon="fa-bell-o"
                iconOnly
                className="text-secondary-300 border-n-1 relative"
                onClick={() => setIsNotifOpen(!isNotifOpen)}
              >
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </Button>

              <Dropdown ref={notifRef} isOpen={isNotifOpen}>
                <div className="px-4 mb-3 flex justify-between items-center">
                  <h3 className="text-secondary-500 font-semibold">
                    Notifications
                  </h3>
                  <span className="text-xs text-secondary-300">
                    {unreadNotifications} new
                  </span>
                </div>
                <div className="flex flex-col">
                  {data.notifications.slice(0, 5).map((notif) => (
                    <div
                      key={notif.id}
                      className="px-4 py-2 hover:bg-n-1 cursor-pointer flex items-start justify-between"
                    >
                      <div>
                        <p className="text-sm text-secondary-500">
                          {notif.description}
                        </p>
                        <span className="text-xs text-secondary-300">
                          {timeAgo(notif.timestamp)}
                        </span>
                      </div>
                      {!notif.read && (
                        <span className="mt-2 size-2 rounded-full bg-primary-500 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </Dropdown>
            </div>

            {/* Profile button */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="size-[44px] md:size-[52px] rounded-full overflow-hidden"
              >
                <img
                  src={data.loggedInUser.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>

              <Dropdown ref={profileRef} isOpen={isProfileOpen} width="240px">
                <div className="px-4 py-2 border-b border-n-1">
                  <p className="font-semibold text-secondary-500">
                    {data.loggedInUser.name}
                  </p>
                  <p className="text-sm text-secondary-300">
                    {data.loggedInUser.email}
                  </p>
                </div>
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-secondary-500 hover:bg-n-1">
                    <i className="fa fa-user-o mr-3"></i>Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-secondary-500 hover:bg-n-1">
                    <i className="fa fa-cog mr-3"></i>Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-secondary-500 hover:bg-n-1">
                    <i className="fa fa-question-circle-o mr-3"></i>Help
                  </button>
                </div>
                <div className="pt-2 border-t border-n-1">
                  <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-n-1">
                    <i className="fa fa-sign-out mr-3"></i>Sign out
                  </button>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-3">
        {/* search box */}
        <div className="flex items-center gap-2 bg-white border border-n-1  py-3.5 px-6 w-full md:w-[320px] h-[52px] rounded-r-1">
          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent outline-none w-full text-secondary-400 text-xs"
          />
          <i className="fa fa-search text-secondary-300"></i>
        </div>

        {/* filters */}
        <div className="flex gap-3">
          {/* Mobile filter button */}
          <Button
            icon="fa-filter"
            iconOnly
            className="md:hidden text-secondary-300 border-n-1"
          />

          {/* Desktop filter buttons */}
          <div className="hidden md:flex gap-6">
            <Button
              icon="fa-filter"
              className="text-secondary-500 border-n-1 text-xs font-semibold [&>i]:text-secondary-300"
            >
              Category
            </Button>
            <Button
              icon="fa-sort"
              className="text-secondary-500 border-n-1 text-xs font-semibold [&>i]:text-secondary-300"
            >
              Sort by
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
