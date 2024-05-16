export default function SecondaryButton({
  value,
  className,
}: {
  value: any;
  className?: string;
}) {
  return (
    <button
      className={`  break-words rounded-[0.5rem] border-2 border-bluePrimary p-2 font-medium capitalize text-bluePrimary ${className}`}
    >
      {value}
    </button>
  );
}
