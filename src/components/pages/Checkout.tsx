import { useContext, useEffect } from "react";
import Input from "../layouts/Input";
import ProductCardCheckout from "../layouts/ProductCardCheckout";
import PrimaryButton from "../layouts/PrimaryButton";
import { useState } from "react";
import {
  changeTitleDocument,
  currency,
  formatNumberWithSpaces,
  isDigit,
  isEmptyString,
} from "../../Helpers";
import DropDownForm from "../layouts/DropDownForm";
import { TrackIcon } from "../layouts/Icons";
import { ShoppingCartContext } from "../../App";
import type { ShoppingCart } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const cityStarter = "Select city";
  const shoppingCartContext = useContext(ShoppingCartContext);
  const [fullName, setFullName] = useState<string>("");
  const [errorFullName, setErrorFullName] = useState<string>("");
  const [city, setCity] = useState<string>(cityStarter);
  const [errorCity, setErrorCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [errorAddress, setErrorAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errorPhone, setErrorPhone] = useState<string>("");
  const shippingCost: number = 20;
  useEffect(() => {
    changeTitleDocument({ routeName: "checkout" });
    window.scrollTo({
      top: 0,
    });
    if (!shoppingCartContext.shoppingCart.length) {
      navigate("/");
    }
  }, []);
  if (shoppingCartContext.shoppingCart.length)
    return (
      <div className="mt-[5.7rem] md:px-4 lg:px-0">
        <h1 className="text-center text-[2.188rem] font-semibold capitalize text-bluePrimary">
          checkout
        </h1>
        <form className="mt-[5.7rem] flex flex-col gap-[5.7rem] md:flex-row md:items-start md:justify-center md:gap-10 lg:gap-16">
          <div className="flex flex-col gap-[3.5rem] px-4 md:sticky md:top-[90px] md:w-[45%] md:px-0 lg:w-[30rem] 2xlg:px-0">
            <h2 className="text-lg font-semibold text-bluePrimary">
              Your information
            </h2>
            <div className="flex flex-col gap-8">
              <Input
                label="Full name"
                placeholder="Enter your full name"
                errorMessage={errorFullName}
                setValue={setFullName}
                setErrorMessage={setErrorFullName}
              />
              <DropDownForm
                label="City"
                title={cityStarter}
                errorMessage={errorCity}
                setValue={setCity}
                setErrorMessage={setErrorCity}
              />
              <Input
                label="Address"
                placeholder="Enter your address"
                errorMessage={errorAddress}
                setValue={setAddress}
                setErrorMessage={setErrorAddress}
              />
              <Input
                label="Phone"
                placeholder="Enter your phone"
                errorMessage={errorPhone}
                setValue={setPhone}
                setErrorMessage={setErrorPhone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[3.5rem] md:w-[25rem]">
            <h2 className="px-4 text-lg font-semibold text-bluePrimary md:px-0">
              Your Order
            </h2>
            <div className="flex w-full flex-col gap-8 border px-4 py-8 md:rounded-xl">
              <div className="flex max-h-[25rem] flex-col gap-8 overflow-auto">
                {shoppingCartContext.shoppingCart.map(
                  (productShoppingCart: ShoppingCart, index: number) => (
                    <ProductCardCheckout
                      key={index}
                      imageProduct={productShoppingCart.imageProduct}
                      name={productShoppingCart.nameProduct}
                      quantity={productShoppingCart.quantity}
                      price={productShoppingCart.price}
                    />
                  ),
                )}
              </div>
              <div className="flex w-full items-center justify-between gap-6 break-all border-t pt-8  text-bluePrimary">
                <span className="flex-1 capitalize text-grayPrimary">
                  subtotal
                </span>
                <span className="space-x-1 font-medium">
                  <span>
                    {formatNumberWithSpaces(
                      shoppingCartContext.subTotal as number,
                    )}
                  </span>
                  <span>{currency}</span>
                </span>
              </div>
              <div className="flex w-full items-center justify-between gap-6 break-all border-t pt-8  text-bluePrimary">
                {city !== cityStarter ? (
                  <>
                    <span className="flex-1 capitalize text-grayPrimary">
                      shipping
                    </span>
                    <span className="font-medium">
                      {city.toLowerCase() !== "casablanca"
                        ? `${shippingCost} ${currency}`
                        : "Free"}
                    </span>
                  </>
                ) : (
                  <div className="flex items-center gap-4">
                    <TrackIcon className="h-8 w-8 fill-bluePrimary" />{" "}
                    <span>Enter your city to view shipping options.</span>
                  </div>
                )}
              </div>

              <div className="flex w-full items-center justify-between gap-6 break-all border-t pt-8  text-bluePrimary">
                <span className="flex-1 capitalize text-grayPrimary">
                  payment method
                </span>
                <span className="space-x-1 font-medium">Cash on delivery</span>
              </div>
              <div className="flex w-full items-center justify-between gap-6 break-all border-t pt-8 text-xl text-bluePrimary">
                <span className="flex-1 font-bold capitalize">total</span>
                <span className="space-x-1 font-bold">
                  <span>
                    {formatNumberWithSpaces(
                      city !== cityStarter
                        ? city.toLowerCase() === "casablanca"
                          ? Number(shoppingCartContext.subTotal + 0)
                          : Number(shoppingCartContext.subTotal + shippingCost)
                        : Number(shoppingCartContext.subTotal + 0),
                    )}
                  </span>
                  <span className="text-yellowPrimary">{currency}</span>
                </span>
              </div>
              <PrimaryButton
                type="submit"
                value="Place order"
                className="mt-9"
                onClick={() => {
                  let errorForm: boolean = false;
                  if (!isEmptyString(fullName)) {
                    setErrorFullName("This field is required");
                    if (!errorForm) errorForm = true;
                  }

                  if (!isEmptyString(address)) {
                    setErrorAddress("This field is required");
                    if (!errorForm) errorForm = true;
                  }
                  if (city === cityStarter) {
                    setErrorCity("This field is required");
                    if (!errorForm) errorForm = true;
                  }
                  if (!isEmptyString(phone)) {
                    setErrorPhone("This field is required");
                    if (!errorForm) errorForm = true;
                  } else if (!isDigit(phone)) {
                    setErrorPhone("Digit only");
                    if (!errorForm) errorForm = true;
                  } else {
                    const phoneNumberLength: number = 10;
                    if (
                      phone.length > phoneNumberLength ||
                      phone.length < phoneNumberLength
                    ) {
                      setErrorPhone(`Invalid phone number`);
                      if (!errorForm) errorForm = true;
                    }
                  }

                  if (errorForm) {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  } else {
                    shoppingCartContext.placeOrder = true;
                    shoppingCartContext.userInformation = {
                      fullName,
                      city,
                      address,
                      phone,
                    };
                    shoppingCartContext.shippingCost =
                      city.toLowerCase() !== "casablanca"
                        ? shippingCost
                        : "Free";
                    navigate("/ThankYou");
                  }
                }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  return (
    <div className="fixed left-0 top-0 z-[2] h-full w-full bg-white"></div>
  );
}
