import { useEffect, useRef, useState } from "react";
import { ArrowDownIcon, CloseIcon, ExclamationIcon, SearchIcon } from "./Icons";
import { filterByName } from "../../Helpers";

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
  const [showClose, setShowClose] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const selectedItemStarter = title;
  const citiesStarter = ["casablanca", "rabat", "fes", "agadir", "marrakech"];
  const [cities, setCities] = useState<string[]>(citiesStarter);
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
            setCities(citiesStarter);
            setSearchText("");
            setShowClose(false);
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
          <div className="flex  flex-col rounded-lg border-2 border-bluePrimary bg-white pb-2 ">
            <div className="flex items-center gap-3 px-3 py-4">
              <SearchIcon className="h-4 w-4 fill-bluePrimary" />
              <input
                type="text"
                placeholder="Search for city"
                value={searchText}
                className="flex-1 text-sm text-bluePrimary outline-none placeholder:text-grayPrimary"
                onChange={(e) => {
                  if (e.target.value.length === 0) setShowClose(false);
                  else setShowClose(true);
                  setSearchText(e.target.value);
                  setCities(filterByName(citiesStarter, e.target.value));
                }}
              />
              <button
                className={`rounded-full ${!showClose ? "hidden" : ""}`}
                type="button"
                onClick={() => {
                  setSearchText("");
                  setShowClose(false);
                  setCities(citiesStarter);
                }}
              >
                <CloseIcon className="h-3 w-3 fill-bluePrimary" />
              </button>
            </div>
            <div className="flex max-h-[14.6rem] flex-col gap-3 overflow-auto border-t pt-1  text-bluePrimary">
              {cities.length ? (
                cities.map((city: string, index: number) => (
                  <button
                    key={index}
                    className="p-2 text-left capitalize hover:bg-gray-50"
                    onClick={selectItem}
                    type="button"
                  >
                    {city}
                  </button>
                ))
              ) : (
                <div className="flex items-center justify-center gap-2 p-2 text-bluePrimary">
                  <ExclamationIcon className="h-4 w-4 fill-bluePrimary" />
                  <span>City not found.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
