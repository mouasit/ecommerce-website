import React from "react";
import { ArrowDownIcon } from "./Icons";

export default function DropDown() {
  return (
    <button
      type="button"
      className="flex items-center justify-between rounded-[0.5rem] border-2 border-bluePrimary p-3 font-light text-left text-sm text-grayPrimary focus:outline-none w-full"
    >
      Select size
      <ArrowDownIcon className="h-3 w-3 fill-bluePrimary" />
    </button>
  );
}
