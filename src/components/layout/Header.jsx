const Header = ({ isOpen: isSidebarOpen, setIsOpen: setIsSidebarOpen }) => {
  return (
    <header className=" h-[248px] md:h-[192px] bg-white">
      header
      {/* Sidebar toggle button */}
      <button
        className="fixed md:hidden text-primary-300 bg-white top-4 left-4 z-40 rounded-full border border-primary-300 size-[54px]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="fa fa-bars fa-lg mt-0.5"></i>
      </button>
    </header>
  );
};

export default Header;
