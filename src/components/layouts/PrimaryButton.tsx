import { Link } from "react-router-dom";

export default function PrimaryButton({
  type,
  value,
  icon,
  className,
  onClick,
  to,
}: {
  type?: "submit" | "reset" | "button" | undefined;
  value?: any;
  icon?: any;
  className?: string;
  onClick?: () => void;
  to?: string;
}) {
  if (to)
    return (
      <Link
        to={to}
        className={`flex items-center justify-center break-words rounded-[0.5rem] border-2 border-yellowPrimary bg-yellowPrimary p-2 font-medium text-bluePrimary ${className}`}
        onClick={(e) => {
          if (type === "submit") e.preventDefault();
          if (onClick) onClick();
        }}
      >
        {icon}
        {value}
      </Link>
    );
  else
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
