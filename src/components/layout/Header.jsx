import Button from "components/ui/Button";
import NotificationsButton from "src/components/NotificationsButton";
import ProfileButton from "src/components/ProfileButton";
import { useSidebar } from "src/context/SidebarContext";

const HeaderMain = ({ title, subText = "" }) => {
  const { isOpen, setIsOpen } = useSidebar();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-secondary-500 self-start md:self-center">
          {title}
        </h1>
        {subText && (
          <p className="text-secondary-300 text-sm mt-1">{subText}</p>
        )}
      </div>

      <div className="flex justify-between md:justify-end items-center">
        <Button
          icon="fa-bars"
          iconOnly
          className="md:hidden text-secondary-300 border-n-1 z-40"
          onClick={toggleSidebar}
        />

        <div className="flex items-center gap-4">
          <NotificationsButton />
          <ProfileButton />
        </div>
      </div>
    </div>
  );
};

const HeaderActionBar = () => {
  return (
    <div className="flex justify-between items-center gap-3">
      {/* search box */}
      <div className="flex items-center gap-2 bg-primary-0 border border-n-1 py-3.5 px-6 w-full md:w-[320px] h-[52px] rounded-r-1">
        <input
          type="text"
          placeholder="Search tasks..."
          className="bg-transparent outline-none w-full text-secondary-400 text-xs"
        />
        <i className="fa fa-search text-secondary-300"></i>
      </div>

      {/* filters */}
      <div className="flex gap-3">
        <Button
          icon="fa-filter"
          iconOnly
          className="md:hidden text-secondary-300 border-n-1"
        />

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
  );
};

const Header = ({
  isOpen: isSidebarOpen,
  setIsOpen: setIsSidebarOpen,
  showActions = true,
  subText = "",
  title = "",
  className = "",
}) => {
  return (
    <header
      className={` bg-primary-0 p-8 flex flex-col gap-6 ${
        showActions ? "h-[248px] md:h-[192px]" : "h-[116px]"
      } ${className}`}
    >
      <HeaderMain
        title={title}
        subText={subText}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {showActions && <HeaderActionBar />}
    </header>
  );
};

export default Header;
