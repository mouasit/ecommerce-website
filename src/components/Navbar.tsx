import React from "react";
import {
  ArrowDownIcon,
  BurgerMenuIcon,
  CloseIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "./Icons";
import logo from "../assets/logo.svg";
import iphone from "../assets/products/iphone.png";
import cable from "../assets/products/cable.png";
import SecondaryButton from "./layouts/SecondaryButton";
import PrimaryButton from "./layouts/PrimaryButton";

export default function Navbar() {
  const [clickBurgerMenu, setClickBurgerMenu] = React.useState<boolean>(false);
  const [hoverDropDown, setHoverDropDown] = React.useState<boolean>(false);
  const [clickDropDown, setClickDropDown] = React.useState<boolean>(false);
  const [hoverAnimation, setHoverAnimation] = React.useState<boolean>(false);
  const [clickAnimation, setClickAnimation] = React.useState<boolean>(false);
  const [clickShoppingCart, setClickShoppingCart] =
    React.useState<boolean>(false);
  const dropDownRef = React.useRef<any>(null);
  const dropDownMobileRef = React.useRef<any>(null);

  return (
    <nav className="sticky top-0 z-[2] bg-white shadow-sm">
      <div className="padding-layouts 2xl:app-container flex w-full items-center justify-between">
        <span className="flex items-center gap-5">
          <button
            className="lg:hidden"
            onClick={() => {
              setClickBurgerMenu(true);
              document.body.classList.add(
                "overflow-hidden",
                "lg:overflow-auto",
              );
            }}
          >
            <BurgerMenuIcon className="h-7 w-7 fill-bluePrimary" />
          </button>
          <button>
            <img src={logo} alt="logo" className="w-[8.5rem]" />
          </button>
        </span>
        <ul className="hidden items-center gap-20 lg:flex">
          <li
            className="relative"
            onFocus={() => {
              setHoverAnimation(true);
              setHoverDropDown(true);
            }}
            onMouseEnter={() => {
              setHoverAnimation(true);
              setHoverDropDown(true);
            }}
            onMouseLeave={() => {
              setHoverAnimation(false);
              dropDownRef.current?.classList.replace(
                "fadein-down",
                "fadeout-up",
              );
              dropDownRef.current?.addEventListener("animationend", () => {
                setHoverDropDown(false);
              });
            }}
          >
            <button className="flex items-center gap-2 text-bluePrimary">
              All products
              <ArrowDownIcon
                className={`rotate h-3 w-3 fill-yellowPrimary ${hoverAnimation ? "down" : ""}`}
              />
            </button>
            {hoverDropDown ? (
              <div
                className="fadein-down absolute w-[15rem] bg-white pt-4 text-sm"
                ref={dropDownRef}
              >
                <div className="flex flex-col gap-3 rounded-lg py-2 font-light text-bluePrimary shadow-xs">
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
            ) : null}
          </li>
          <li>
            <button className="text-bluePrimary">Electronics</button>
          </li>
          <li>
            <button className="text-bluePrimary">Home Appliance</button>
          </li>
          <li>
            <button className="text-bluePrimary">Gaming</button>
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
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-2 text-bluePrimary">
                All products
              </button>
              <button
                className="rounded-full bg-yellowPrimary p-[.4rem]"
                onClick={() => {
                  if (clickDropDown) {
                    dropDownMobileRef.current?.classList.replace(
                      "fadein-down",
                      "fadeout-up-1",
                    );
                    dropDownMobileRef.current?.addEventListener(
                      "animationend",
                      () => {
                        setClickDropDown(false);
                      },
                    );
                  } else setClickDropDown(true);
                  setClickAnimation(!clickAnimation);
                }}
              >
                <ArrowDownIcon
                  className={`rotate h-3 w-3 fill-bluePrimary ${clickAnimation ? "down" : ""}`}
                />
              </button>
            </div>
            {clickDropDown ? (
              <div
                className="fadein-down mt-9 flex flex-col gap-7  border-l pl-5 text-sm font-light text-bluePrimary"
                ref={dropDownMobileRef}
              >
                <button className="text-left capitalize">pc & laptop</button>
                <button className="text-left capitalize">smart home</button>
                <button className="text-left capitalize">phones</button>
                <button className="text-left capitalize">accessoires</button>
              </div>
            ) : null}
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
        <button
          className="flex items-start gap-[.2rem]"
          onClick={() => {
            setClickShoppingCart(true);
            document.body.classList.add("overflow-hidden");
          }}
        >
          <ShoppingCartIcon className="h-[2.3rem] w-[2.3rem] fill-bluePrimary" />
          <span className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-yellowPrimary font-bold text-bluePrimary">
            0
          </span>
        </button>
        {clickShoppingCart ? (
          <div
            className="fixed left-0 top-0 h-screen w-full bg-black bg-opacity-1"
            onClick={() => {
              setClickShoppingCart(false);
              document.body.classList.remove("overflow-hidden");
            }}
          ></div>
        ) : null}
        <div
          className={`fixed right-0 top-0  w-full transition-transform duration-500 sm:w-[26rem] ${clickShoppingCart ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="relative h-screen bg-white py-4 pb-[16.1rem]">
            <div className="flex items-center justify-between border-b px-4 pb-4 text-lg font-semibold capitalize  text-bluePrimary">
              shopping cart
              <button
                className="rounded-full bg-yellowPrimary p-2"
                onClick={() => {
                  setClickShoppingCart(false);
                  document.body.classList.remove("overflow-hidden");
                }}
              >
                <CloseIcon className="h-[.6rem] w-[.6rem] fill-bluePrimary" />
              </button>
            </div>
            <div className="flex h-full flex-col gap-8 overflow-auto px-4 py-8">
              <div className="flex items-center justify-between">
                <button className="flex gap-3 text-left">
                  <div className="flex items-center justify-center rounded-xl bg-grayLight p-3">
                    <img
                      src={iphone}
                      alt="product image"
                      className="h-[5rem] w-[5rem]"
                    />
                  </div>
                  <span className="flex flex-col gap-1 capitalize text-bluePrimary">
                    <span className="font-medium">iphone 14 plus</span>
                    <span className="font-light text-grayPrimary">$600,00</span>
                  </span>
                </button>
                <button className="rounded-full bg-gray-100 p-2">
                  <TrashIcon className="h-5 w-5 fill-bluePrimary" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex gap-3 text-left">
                  <div className="flex items-center justify-center rounded-xl bg-grayLight p-3">
                    <img
                      src={cable}
                      alt="product image"
                      className="h-[5rem] w-[5rem]"
                    />
                  </div>
                  <span className="flex flex-col gap-1 capitalize text-bluePrimary">
                    <span className="font-medium">Baseus Tungsten</span>
                    <span className="font-light text-grayPrimary">$15,00</span>
                  </span>
                </button>
                <button className="rounded-full bg-gray-100 p-2">
                  <TrashIcon className="h-5 w-5 fill-bluePrimary" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-4 flex w-full flex-col gap-8 border-t px-4 pt-8 text-lg">
              <div className="flex w-full items-center justify-between text-bluePrimary">
                <span className="capitalize">subtotal</span>
                <span className="font-bold">$500,00</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SecondaryButton value="view cart" className="w-full" />
                <PrimaryButton value="checkout" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
