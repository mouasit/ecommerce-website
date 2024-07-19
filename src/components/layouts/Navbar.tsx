import React, { useContext, useEffect } from "react";
import {
  ArrowDownIcon,
  BurgerMenuIcon,
  CloseIcon,
  EmptyCartIcon,
  ShoppingCartIcon,
} from "./Icons";
import logo from "../../assets/logo.svg";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import ProductShoppingCartCard from "./ProductShoppingCartCard";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ShoppingCart, ShoppingCartContext } from "../../App";
import { currency, formatNumberWithSpaces } from "../../Helpers";

export default function Navbar() {
  const location = useLocation();
  const shoppingCartContext = useContext(ShoppingCartContext);
  const [clickBurgerMenu, setClickBurgerMenu] = React.useState<boolean>(false);
  const [hoverDropDown, setHoverDropDown] = React.useState<boolean>(false);
  const [clickDropDown, setClickDropDown] = React.useState<boolean>(false);
  const [hoverAnimation, setHoverAnimation] = React.useState<boolean>(false);
  const [clickAnimation, setClickAnimation] = React.useState<boolean>(false);
  const [clickShoppingCart, setClickShoppingCart] =
    React.useState<boolean>(false);
  const dropDownRef = React.useRef<any>(null);
  const dropDownMobileRef = React.useRef<any>(null);
  const closeDropDown = () => {
    setHoverAnimation(false);
    dropDownRef.current?.classList.replace("fadein-down", "fadeout-up");
    dropDownRef.current?.addEventListener("animationend", () => {
      setHoverDropDown(false);
    });
  };
  const closeBurgerMenu = () => {
    setClickBurgerMenu(false);
    document.body.classList.remove("overflow-hidden");
  };
  useEffect(() => {
    if (shoppingCartContext.shoppingCart.length) {
      const pricesOfProduct = shoppingCartContext.shoppingCart.map(
        (product: ShoppingCart) => product.price,
      );
      shoppingCartContext.setSubTotal(
        pricesOfProduct.reduce((acc: number, val: number) => acc + val),
      );
    } else shoppingCartContext.setSubTotal(0);
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify({
        shoppingCart: shoppingCartContext.shoppingCart,
        subTotal: shoppingCartContext.subTotal,
      }),
    );
  }, [shoppingCartContext]);
  return (
    <nav className="sticky top-0 z-[2] bg-white shadow-sm">
      <div className="app-container flex h-auto w-full justify-between p-4 lg:h-[4.5rem] lg:py-0 2xlg:px-0">
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
          <Link to="/">
            <img src={logo} alt="logo" className="w-[8.5rem]" />
          </Link>
        </span>
        <ul className="hidden gap-20 lg:flex">
          <li
            className="relative"
            onMouseEnter={() => {
              setHoverAnimation(true);
              setHoverDropDown(true);
            }}
            onMouseLeave={() => {
              closeDropDown();
            }}
          >
            <NavLink
              to="/"
              className="flex h-full items-center gap-2 text-bluePrimary"
            >
              All products
              <ArrowDownIcon
                className={`rotate h-3 w-3 fill-yellowPrimary ${hoverAnimation ? "down" : ""}`}
              />
            </NavLink>
            {hoverDropDown ? (
              <div
                className="fadein-down absolute top-12 w-[15rem] bg-white pt-4 text-sm"
                ref={dropDownRef}
              >
                <div className="flex flex-col gap-3 rounded-lg py-2 font-light text-bluePrimary shadow-xs">
                  <Link
                    onClick={closeDropDown}
                    to="/Category/Electronics/Laptops"
                    className="p-2 text-left capitalize hover:bg-gray-50"
                  >
                    laptops
                  </Link>
                  <Link
                    onClick={closeDropDown}
                    to="/Category/Electronics/Smart Watches"
                    className="p-2 text-left capitalize hover:bg-gray-50"
                  >
                    smart watches
                  </Link>
                  <Link
                    onClick={closeDropDown}
                    to="/Category/Electronics/Phones"
                    className="p-2 text-left capitalize hover:bg-gray-50"
                  >
                    phones
                  </Link>
                  <Link
                    onClick={closeDropDown}
                    to="/Category/Electronics/Accessories"
                    className="p-2 text-left capitalize hover:bg-gray-50"
                  >
                    accessories
                  </Link>
                </div>
              </div>
            ) : null}
          </li>
          <li>
            <NavLink
              to="/Category/Electronics"
              className="flex h-full items-center text-bluePrimary"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Category/Home Appliance"
              className="flex h-full items-center text-bluePrimary"
            >
              Home Appliance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Category/Gaming"
              className="flex h-full items-center text-bluePrimary"
            >
              Gaming
            </NavLink>
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
              <Link
                onClick={closeBurgerMenu}
                to="/"
                className="flex items-center gap-2 text-bluePrimary"
              >
                All products
              </Link>
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
                <Link
                  onClick={closeBurgerMenu}
                  to="/Category/Electronics/Laptops"
                  className="text-left capitalize"
                >
                  laptops
                </Link>
                <Link
                  onClick={closeBurgerMenu}
                  to="/Category/Electronics/Smart Watches"
                  className="text-left capitalize"
                >
                  smart watches
                </Link>
                <Link
                  onClick={closeBurgerMenu}
                  to="/Category/Electronics/Phones"
                  className="text-left capitalize"
                >
                  phones
                </Link>
                <Link
                  onClick={closeBurgerMenu}
                  to="/Category/Electronics/Accessories"
                  className="text-left capitalize"
                >
                  accessories
                </Link>
              </div>
            ) : null}
          </li>
          <li>
            <Link
              onClick={closeBurgerMenu}
              to="/Category/Electronics"
              className="text-bluePrimary"
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              onClick={closeBurgerMenu}
              to="/Category/Home Appliance"
              className="text-bluePrimary"
            >
              Home Appliance
            </Link>
          </li>
          <li>
            <Link
              onClick={closeBurgerMenu}
              to="/Category/Gaming"
              className="text-bluePrimary"
            >
              Gaming
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <button
            className="flex items-start gap-[.2rem]"
            onClick={() => {
              if (
                location.pathname.toLowerCase() !== "/checkout" &&
                location.pathname.toLowerCase() !== "/thankyou"
              ) {
                setClickShoppingCart(true);
                document.body.classList.add("overflow-hidden");
              }
            }}
          >
            <ShoppingCartIcon className="h-[2.3rem] w-[2.3rem] fill-bluePrimary" />
            <span className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-yellowPrimary font-bold text-bluePrimary">
              {shoppingCartContext.shoppingCart.length}
            </span>
          </button>
        </div>
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
          className={`fixed inset-0 top-0 w-full transition-transform duration-500 sm:left-auto sm:right-0 sm:w-[26rem] ${clickShoppingCart ? "translate-x-0" : "translate-x-full"}`}
        >
          <div
            className={`relative h-full  bg-white py-4 ${shoppingCartContext.shoppingCart.length ? "pb-[16.1rem]" : ""} sm:h-screen`}
          >
            <div className="flex items-center justify-between gap-2 border-b px-4 pb-4 text-lg font-semibold  capitalize text-bluePrimary">
              <span className="overflow-hidden whitespace-nowrap">
                shopping cart
              </span>
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

            {shoppingCartContext.shoppingCart.length ? (
              <>
                <div className="flex h-full flex-col gap-8 overflow-auto px-4 py-8">
                  {shoppingCartContext.shoppingCart.map(
                    (product: ShoppingCart, index: number) => (
                      <ProductShoppingCartCard
                        productId={product.idProduct}
                        key={index}
                        name={product.nameProduct}
                        price={product.price}
                        quantity={product.quantity}
                        imageProduct={product.imageProduct}
                        variants={product.variants}
                        onClick={() => {
                          setClickShoppingCart(false);
                          document.body.classList.remove("overflow-hidden");
                        }}
                      />
                    ),
                  )}
                </div>
                <div className="absolute bottom-4 flex w-full flex-col gap-8 border-t px-4 pt-8 text-lg">
                  <div className="flex w-full items-center justify-between gap-2 break-all text-bluePrimary">
                    <span className="flex-1 capitalize">subtotal</span>
                    <span className="space-x-1 font-bold">
                      <span>
                        {formatNumberWithSpaces(shoppingCartContext.subTotal)}
                      </span>
                      <span>{currency}</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <SecondaryButton
                      value="view cart"
                      className="w-full cursor-not-allowed"
                    />
                    <PrimaryButton
                      value="Checkout"
                      className="w-full"
                      to="/Checkout"
                      type="button"
                      onClick={() => {
                        setClickShoppingCart(false);
                        document.body.classList.remove("overflow-hidden");
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <EmptyCartIcon className="h-[3.5rem] w-[3.5rem]" />
                <span className="text-[1rem] text-bluePrimary">
                  Your cart is empty.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
