export default function PrimaryButton({
  value,
  className,
}: {
  value: any;
  className?: string;
}) {
  return (
    <button
      className={`rounded-[0.5rem] border-2 border-yellowPrimary bg-yellowPrimary p-2 font-medium capitalize text-bluePrimary ${className}`}
    >
      {value}
    </button>
  );
}
