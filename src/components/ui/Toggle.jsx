const Toggle = ({
  label,
  description = "",
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex-1">
        <label className="block text-sm font-semibold text-secondary-500 mb-1">
          {label}
        </label>
        {description && (
          <p className="text-xs text-secondary-300">{description}</p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
          checked ? "bg-primary-500" : "bg-secondary-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-primary-0 transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default Toggle;
