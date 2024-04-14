import React from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BurgerMenuIcon,
  CloseIcon,
  ShoppingCartIcon,
} from "./Icons";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [clickBurgerMenu, setClickBurgerMenu] = React.useState<boolean>(false);
  const [clickDropDown, setClickDropDown] = React.useState<boolean>(false);
  return (
    <nav className="mt-[1.25rem] flex items-center justify-between px-4">
      <span className="flex items-center gap-5">
        <button
          className="lg:hidden"
          onClick={() => {
            setClickBurgerMenu(true);
            document.body.classList.add("overflow-hidden", "lg:overflow-auto");
          }}
        >
          <BurgerMenuIcon className="h-7 w-7 fill-bluePrimary" />
        </button>
        <button>
          <img src={logo} alt="logo" className="w-[8.5rem]" />
        </button>
      </span>
      <ul className={`hidden items-center gap-20 lg:flex`}>
        <li
          className="relative"
          onMouseEnter={() => setClickDropDown(true)}
          onMouseLeave={() => setClickDropDown(false)}
        >
          <button className="flex items-center gap-2 text-bluePrimary">
            All products
            {clickDropDown ? (
              <ArrowUpIcon className="h-3 w-3 fill-yellowPrimary" />
            ) : (
              <ArrowDownIcon className="h-3 w-3 fill-yellowPrimary" />
            )}
          </button>
          <div
            className={`absolute pt-4 ${clickDropDown ? "block" : "hidden"} w-[15rem]`}
          >
            <div
              className={`shadow-xs flex flex-col gap-3 rounded-lg py-2 text-sm font-light text-bluePrimary`}
            >
              <button className="p-2 text-left capitalize hover:bg-gray-50">
                pc & laptop
              </button>
              <button className="p-2 text-left capitalize hover:bg-gray-50">
                smart home
              </button>
              <button className="p-2 text-left capitalize hover:bg-gray-50">
                phones
              </button>
              <button className="p-2 text-left capitalize hover:bg-gray-50">
                accessoires
              </button>
            </div>
          </div>
        </li>
        <li>
          <button className="text-bluePrimary">Electronic</button>
        </li>
        <li>
          <button className="text-bluePrimary">Audio & Video</button>
        </li>
        <li>
          <button className="text-bluePrimary">Furniture</button>
        </li>
      </ul>
      <ul
        className={`fixed left-0 top-0 transform transition-transform  duration-500 lg:hidden lg:translate-x-0 lg:transition-none ${clickBurgerMenu ? "translate-x-0" : "translate-x-full"} h-full w-full items-center gap-20 space-y-9 bg-white p-4`}
      >
        <li className="flex justify-end lg:hidden">
          <button
            className="rounded-full"
            onClick={() => {
              setClickBurgerMenu(false);
              document.body.classList.remove("overflow-hidden");
            }}
          >
            <CloseIcon className="h-[.9rem] w-[.9rem] fill-bluePrimary" />
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2 text-bluePrimary">
            All products
            <ArrowDownIcon className="h-3 w-3 fill-yellowPrimary" />
          </button>
        </li>
        <li>
          <button className="text-bluePrimary">Electronic</button>
        </li>
        <li>
          <button className="text-bluePrimary">Audio & Video</button>
        </li>
        <li>
          <button className="text-bluePrimary">Furniture</button>
        </li>
      </ul>
      <button className="flex items-start gap-[.2rem]">
        <ShoppingCartIcon className="h-[2.3rem] w-[2.3rem] fill-bluePrimary" />
        <span className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-yellowPrimary font-bold text-bluePrimary">
          0
        </span>
      </button>
    </nav>
  );
}
