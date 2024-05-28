import DropDownSearch from "./DropDownSearch";
import { ExclamationIcon } from "./Icons";

type Input = {
  label?: string;
  title: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>;
  errorMessage?: string;
};

export default function DropDownForm({
  label,
  title,
  setValue,
  setErrorMessage,
  errorMessage,
}: Input) {
  return (
    <div className="relative flex flex-col gap-3">
      <label className="text-sm text-bluePrimary">{label}</label>
      <DropDownSearch
        title={title}
        errorMessage={errorMessage}
        setValue={setValue}
        setErrorMessage={setErrorMessage}
      />
      {errorMessage?.length ? (
        <div className="absolute bottom-[-1.4rem] left-0 flex w-full items-center gap-1 text-sm font-medium  text-redError">
          <ExclamationIcon className="h-5 w-5 fill-redError" />
          <span>{errorMessage}</span>
        </div>
      ) : null}
    </div>
  );
}
