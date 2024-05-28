export default function PrimaryButton({
  type,
  value,
  icon,
  className,
  onClick,
}: {
  type?: "submit" | "reset" | "button" | undefined;
  value?: any;
  icon?: any;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      className={`break-words rounded-[0.5rem] border-2 border-yellowPrimary bg-yellowPrimary p-2 font-medium text-bluePrimary ${className}`}
      onClick={(e) => {
        if (type === "submit") e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {icon}
      {value}
    </button>
  );
}
