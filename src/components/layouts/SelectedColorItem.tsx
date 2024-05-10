import { CheckIcon } from "./Icons";

export default function SelectedColorItem({
  backgroundColor,
  selected,
  onClick,
}: {
  backgroundColor: string;
  selected: boolean;
  onClick: () => {} | void;
}) {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-full"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {selected ? <CheckIcon className="h-4 w-4 fill-white" /> : null}
    </button>
  );
}
