import { useState } from "react";
import useOutsideClick from "src/hooks/useOutsideClick";

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useOutsideClick(() => setIsOpen(false));

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-secondary-500 mb-2">
          {label}
        </label>
      )}

      <div className="relative" ref={selectRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-[52px] px-6 bg-primary-0 border border-n-1 rounded-r-1 flex items-center justify-between text-left text-sm text-secondary-500 hover:border-secondary-300 transition-colors"
        >
          <span
            className={
              selectedOption ? "text-secondary-500" : "text-secondary-300"
            }
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <i
            className={`fa fa-chevron-right text-secondary-300 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-primary-0 border border-n-1 rounded-r-1 shadow-lg z-50 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="w-full px-6 py-3 text-left text-sm text-secondary-500 hover:bg-n-1 transition-colors first:rounded-t-r-1 last:rounded-b-r-1"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
