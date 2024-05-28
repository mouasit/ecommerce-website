import { useEffect, useRef, useState } from "react";
import { ArrowDownIcon } from "./Icons";

type DropDownSearch = {
  title: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>;
  errorMessage?: string;
};

export default function DropDownSearch({
  title,
  setValue,
  setErrorMessage,
  errorMessage,
}: DropDownSearch) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [clickDropDown, setClickDropDown] = useState<boolean>(false);
  const [endAnimation, setEndAnimation] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(title);
  const selectedItemStarter = title;
  const cities = ["casablanca", "rabat", "fes", "agadir", "marrakech"];
  function handleBlur(e: any) {
    if (
      containerRef.current &&
      endAnimation &&
      !containerRef.current.contains(e.target)
    )
      closeDropDown();
  }
  function closeDropDown() {
    setEndAnimation(false);
    dropDownRef.current?.classList.replace("fadein-down", "fadeout-up");
    dropDownRef.current?.addEventListener("animationend", () => {
      setClickDropDown(false);
    });
  }
  function selectItem(e: any) {
    if (setValue) setValue(e.target.textContent);
    setSelectedItem(e.target.textContent);
    closeDropDown();
  }
  useEffect(() => {
    document.addEventListener("click", handleBlur);
    return () => {
      document.removeEventListener("click", handleBlur);
    };
  }, [endAnimation]);
  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        className={`flex w-full items-center justify-between rounded-[0.5rem] border-2 ${errorMessage?.length ? "border-redError" : "border-bluePrimary"}  p-3 text-left focus:outline-none`}
        onClick={() => {
          if (clickDropDown) closeDropDown();
          else {
            if (errorMessage?.length) {
              if (setErrorMessage) setErrorMessage("");
            }
            setClickDropDown(true);
            setEndAnimation(true);
          }
        }}
      >
        <span
          className={`text-sm ${selectedItem !== selectedItemStarter ? "capitalize text-bluePrimary" : "text-grayPrimary"}`}
        >
          {selectedItem}
        </span>
        <ArrowDownIcon
          className={`rotate h-3 w-3 fill-bluePrimary ${endAnimation ? "down" : null}`}
        />
      </button>
      {clickDropDown ? (
        <div
          className="fadein-down absolute z-[1] w-full pt-2 text-sm"
          ref={dropDownRef}
        >
          <div className="flex max-h-[15.5rem] flex-col gap-3 overflow-auto rounded-lg border-2 border-bluePrimary bg-white py-2 text-bluePrimary">
            {cities.map((city: string, index: number) => (
              <button
                key={index}
                className="p-2 text-left capitalize hover:bg-gray-50"
                onClick={selectItem}
                type="button"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
