const Alert = ({
  children,
  variant = "info",
  title,
  icon,
  onClose,
  className = "",
  ...props
}) => {
  const variants = {
    success: {
      container: "bg-green-100 border-green-200 text-green-900",
      icon: "text-green-500",
      closeButton: "text-green-400 hover:text-green-600",
    },
    error: {
      container: "bg-error-100 border-error-200 text-error-900",
      icon: "text-error-500",
      closeButton: "text-error-400 hover:text-error-600",
    },
    warning: {
      container: "bg-warning-100 border-warning-200 text-warning-900",
      icon: "text-warning-500",
      closeButton: "text-warning-400 hover:text-warning-600",
    },
    info: {
      container: "bg-info-100 border-info-200 text-info-900",
      icon: "text-info-500",
      closeButton: "text-info-400 hover:text-info-600",
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

  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-r-1 border ${currentVariant.container} ${className}`}
      {...props}
    >
      {currentIcon && (
        <i
          className={`fa ${currentIcon} fa-lg mt-0.5 ${currentVariant.icon}`}
        />
      )}

      <div className="flex-1">
        {title && <h4 className="font-semibold text-sm mb-1">{title}</h4>}
        <div className="text-sm">{children}</div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className={`p-1 rounded transition-colors ${currentVariant.closeButton}`}
          aria-label="Close alert"
        >
          <i className="fa fa-times fa-sm" />
        </button>
      )}
    </div>
  );
};

export default Alert;
