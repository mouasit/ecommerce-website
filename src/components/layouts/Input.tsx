import { ExclamationIcon } from "./Icons";

type Input = {
  label?: string;
  placeholder?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>;
  errorMessage?: string;
};

export default function Input({
  label,
  placeholder,
  setValue,
  setErrorMessage,
  errorMessage,
}: Input) {
  return (
    <div className="relative flex flex-col gap-3">
      <label className="text-sm text-bluePrimary">{label}</label>
      <input
        type="text"
        className={`rounded-[0.5rem] border-2 ${errorMessage?.length ? "border-redError" : "border-bluePrimary"} p-3 text-sm text-bluePrimary placeholder:text-grayPrimary focus:outline-none`}
        placeholder={placeholder}
        onChange={(e) => {
          if (setValue) setValue(e.target.value);
          if (errorMessage?.length) {
            if (setErrorMessage) setErrorMessage("");
          }
        }}
      />
      {errorMessage?.length ? (
        <div className="text-redError absolute bottom-[-1.4rem] left-0 flex w-full items-center gap-1 text-sm  font-medium">
          <ExclamationIcon className="fill-redError h-5 w-5" />
          <span>{errorMessage}</span>
        </div>
      ) : null}
    </div>
  );
}
