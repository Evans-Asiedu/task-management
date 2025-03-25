import { data } from "src/data";
import Button from "components/ui/Button";

const Header = ({ isOpen: isSidebarOpen, setIsOpen: setIsSidebarOpen }) => {
  const title = "Overview";
  const unreadNotifications = data.notifications.filter((n) => !n.read).length;

  return (
    <header className="h-[248px] md:h-[192px] bg-white p-8 flex flex-col gap-6">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* title */}
        <h1 className="text-2xl font-semibold text-secondary-500 self-start md:self-center">{title}</h1>

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
            <Button
              icon="fa-bell-o"
              iconOnly
              className="text-secondary-300 border-n-1 relative"
            >
              {unreadNotifications > 0 && (
                <span className="absolute top-3 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </Button>

            {/* Profile button */}
            <div className="size-[44px] md:size-[52px] rounded-full overflow-hidden">
              <img
                src={data.loggedInUser.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-3">
        {/* search box */}
        <div className="flex items-center gap-2 bg-white border border-n-1  py-3.5 px-6 w-full md:w-[320px] h-[52px] rounded-[10px]">
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
