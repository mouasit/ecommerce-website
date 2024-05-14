import { ExclamationIcon } from "./Icons";

type Input = {
  label?: string;
  placeholder?: string;
};

export default function Input({ label, placeholder }: Input) {
  return (
    <div className="relative flex flex-col gap-3">
      <label className="text-sm text-bluePrimary">{label}</label>
      <input
        type="text"
        className="rounded-[0.5rem] border-2 border-bluePrimary p-3 text-sm text-bluePrimary placeholder:text-grayPrimary focus:outline-none"
        placeholder={placeholder}
      />
      <div className="text-redError absolute bottom-[-1.4rem] left-0 flex w-full items-center gap-1  text-sm">
        <ExclamationIcon className="fill-redError h-5 w-5" />
        <span>Error message</span>
      </div>
    </div>
  );
}
