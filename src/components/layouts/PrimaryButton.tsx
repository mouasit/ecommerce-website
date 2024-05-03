export default function PrimaryButton({
  value,
  icon,
  className,
}: {
  value?: any;
  icon?: any;
  className?: string;
}) {
  return (
    <button
      className={`rounded-[0.5rem] border-2 border-yellowPrimary bg-yellowPrimary p-2 font-medium text-bluePrimary ${className}`}
    >
      {icon}
      {value}
    </button>
  );
}
