const Button = ({
  children,
  icon,
  iconOnly = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "bg-white border flex items-center justify-center transition-colors";
  const sizeStyles = iconOnly
    ? "size-[44px] md:size-[52px] rounded-full"
    : "h-[52px] px-6 rounded-[10px] gap-3";
  const iconStyles = iconOnly ? "text-secondary-300" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${iconStyles} ${className}`}
      {...props}
    >
      {iconOnly ? (
        <>
          <i className={`fa ${icon} fa-lg mt-0.5`} />
          {children}
        </>
      ) : (
        <>
          {icon && <i className={`fa ${icon} fa-lg mt-0.5`} />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
