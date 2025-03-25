const Dropdown = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-[320px] bg-white border border-n-1 rounded-[10px] shadow-lg z-50 py-4">
      {children}
    </div>
  );
};

export default Dropdown;
