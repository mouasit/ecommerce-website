import { Link } from "react-router-dom";

export default function SecondaryButton({
  value,
  className,
  to,
}: {
  value: any;
  className?: string;
  to?: string;
}) {
  if (to)
    return (
      <Link
        to={to}
        className={`break-words rounded-[0.5rem] flex justify-center items-center border-2 border-bluePrimary p-2 font-medium capitalize text-bluePrimary ${className}`}
      >
        {value}
      </Link>
    );
  else
    return (
      <button
        className={`break-words rounded-[0.5rem] border-2 border-bluePrimary p-2 font-medium capitalize text-bluePrimary ${className}`}
      >
        {value}
      </button>
    );
}
