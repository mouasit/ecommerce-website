export default function PrimaryButton({
  value,
  icon,
  className,
  onClick,
}: {
  value?: any;
  icon?: any;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`overflow-hidden rounded-[0.5rem] border-2 border-yellowPrimary bg-yellowPrimary p-2 font-medium text-bluePrimary ${className}`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {icon}
      {value}
    </button>
  );
}
