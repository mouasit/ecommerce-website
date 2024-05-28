import Input from "../layouts/Input";
import redmi from "../../assets/products/redmi.jpg";
import ProductCardCheckout from "../layouts/ProductCardCheckout";
import PrimaryButton from "../layouts/PrimaryButton";
import { useState } from "react";
import { isDigit, isEmptyString } from "../../Helpers";
import DropDownForm from "../layouts/DropDownForm";
import { TrackIcon } from "../layouts/Icons";

export default function Checkout() {
  const cityStarter = "Select city";
  const [fullName, setFullName] = useState<string>("");
  const [errorFullName, setErrorFullName] = useState<string>("");
  const [city, setCity] = useState<string>(cityStarter);
  const [errorCity, setErrorCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [errorAddress, setErrorAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errorPhone, setErrorPhone] = useState<string>("");
  return (
    <div className="mt-[5.7rem] md:px-4 lg:px-0">
      <h1 className="text-center text-[2.188rem] font-semibold capitalize text-bluePrimary">
        checkout
      </h1>
      <form className="mt-[5.7rem] flex flex-col gap-[5.7rem] md:flex-row md:items-start md:justify-center md:gap-10 lg:gap-16">
        <div className="flex flex-col gap-[3.5rem] px-4 md:w-[45%] md:px-0 lg:w-[30rem] 2xlg:px-0">
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
            <div className="flex flex-col gap-8">
              <ProductCardCheckout
                imageProduct={redmi}
                name="Xiaomi redmi"
                quantity="2"
                price="1500"
              />
              <ProductCardCheckout
                imageProduct={redmi}
                name="Xiaomi redmi R..."
                quantity="2"
                price="1500"
              />
              <ProductCardCheckout
                imageProduct={redmi}
                name="Xiaomi redmi R..."
                quantity="2"
                price="1500"
              />
            </div>
            <div className="flex w-full items-center justify-between gap-6 break-all border-t pt-8  text-bluePrimary">
              <span className="flex-1 capitalize text-grayPrimary">
                subtotal
              </span>
              <span className="font-medium">4500 DH</span>
            </div>
            <div className="flex w-full items-center justify-between gap-6 break-all border-t pt-8  text-bluePrimary">
              {city !== cityStarter ? (
                <>
                  <span className="flex-1 capitalize text-grayPrimary">
                    shipping
                  </span>
                  <span className="font-medium">
                    {city.toLowerCase() !== "casablanca" ? "20 DH" : "Free"}
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <TrackIcon className="h-8 w-8 fill-bluePrimary" />{" "}
                  <span>Enter your city to view shipping options.</span>
                </div>
              )}
            </div>
            <div className="flex w-full items-center justify-between gap-6 break-all border-t pt-8 text-xl text-bluePrimary">
              <span className="flex-1 font-bold capitalize">total</span>
              <span className="font-bold">
                4500 <span className="text-yellowPrimary">DH</span>
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
                }
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
