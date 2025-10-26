const Radio = ({ label, options = [], value, onChange, className = "" }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold text-secondary-500 mb-2">
          {label}
        </label>
      )}

      <div className="flex gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-3 px-4 py-3 border rounded-r-1 cursor-pointer transition-colors ${
              value === option.value
                ? "border-primary-500 bg-primary-100"
                : "border-secondary-200 bg-primary-0 hover:border-secondary-300"
            }`}
          >
            <div className="relative">
              <input
                type="radio"
                name={label}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  value === option.value
                    ? "border-primary-500 bg-primary-500"
                    : "border-secondary-200 bg-primary-0"
                }`}
              >
                {value === option.value && (
                  <div className="w-2 h-2 rounded-full bg-primary-0" />
                )}
              </div>
            </div>
            <span
              className={`text-sm font-medium ${
                value === option.value
                  ? "text-primary-500"
                  : "text-secondary-500"
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;
