import { useEffect, useRef, useState } from "react";
import { ArrowDownIcon } from "./Icons";

export default function DropDown({
  items,
  attributeName,
}: {
  items: string[];
  attributeName: string;
}) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [clickDropDown, setClickDropDown] = useState<boolean>(false);
  const [endAnimation, setEndAnimation] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(
    `Selected ${attributeName}`,
  );
  const selectedItemStarter = `Selected ${attributeName}`;
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
        className="flex w-full items-center justify-between rounded-[0.5rem] border-2 border-bluePrimary p-3 text-left focus:outline-none"
        onClick={() => {
          if (clickDropDown) closeDropDown();
          else {
            setClickDropDown(true);
            setEndAnimation(true);
          }
        }}
      >
        <span
          className={`${selectedItem !== selectedItemStarter ? "uppercase text-bluePrimary" : "font-light text-grayPrimary"}`}
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
            {items.map((item: string, index: number) => (
              <button
                key={index}
                className="p-2 text-left uppercase hover:bg-gray-50"
                onClick={selectItem}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
