import { forwardRef } from "react";

const Dropdown = forwardRef(({ isOpen, children, width = "320px" }, ref) => {
  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      style={{ width }}
      className="absolute top-full right-0 mt-2 bg-white border border-n-1 rounded-r-1 shadow-lg z-50 py-4"
    >
      {children}
    </div>
  );
});

export default Dropdown;
