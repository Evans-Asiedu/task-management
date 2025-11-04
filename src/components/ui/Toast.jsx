import { useEffect } from "react";

const Toast = ({
  id,
  message,
  variant = "info",
  icon,
  onClose,
  duration = 3000,
}) => {
  const variants = {
    success: {
      container: "bg-success-100 border-success-200 text-success-900",
      icon: "text-success-500",
    },
    error: {
      container: "bg-error-100 border-error-200 text-error-900",
      icon: "text-error-500",
    },
    warning: {
      container: "bg-warning-100 border-warning-200 text-warning-900",
      icon: "text-warning-500",
    },
    info: {
      container: "bg-info-100 border-info-200 text-info-900",
      icon: "text-info-500",
    },
  };

  const defaultIcons = {
    success: "fa-check-circle",
    error: "fa-exclamation-circle",
    warning: "fa-exclamation-triangle",
    info: "fa-info-circle",
  };

  const currentVariant = variants[variant] || variants.info;
  const currentIcon = icon || defaultIcons[variant] || defaultIcons.info;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-r-1 border shadow-lg min-w-[300px] max-w-[400px] ${currentVariant.container} animate-slide-in`}
    >
      {currentIcon && (
        <i
          className={`fa ${currentIcon} fa-lg ${currentVariant.icon} shrink-0`}
        />
      )}
      <p className="text-sm font-medium flex-1">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="text-secondary-400 hover:text-secondary-500 transition-colors shrink-0"
        aria-label="Close toast"
      >
        <i className="fa fa-times fa-sm" />
      </button>
    </div>
  );
};

export default Toast;
