import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../App";
import { CalenDarIcon, CheckGradientIcon } from "../layouts/Icons";

export default function ThankYou() {
  const shoppingCartContext = useContext(ShoppingCartContext);
  useEffect(() => {
    shoppingCartContext.setShoppingCart([]);
  }, []);
  return (
    <div className="mt-[5.7rem] px-4 2xl:px-0">
      <div className="flex flex-col items-center justify-center gap-6">
        <CheckGradientIcon className="h-[6.5rem] w-[6.5rem]" />
        <h1 className="text-[2rem] font-bold capitalize text-bluePrimary">
          thank you
        </h1>
        <div className="flex flex-col items-center justify-center gap-1 font-light text-grayPrimary">
          <span className="text-center">Your order has been received</span>
          <span className="text-center">
            We will notify you by email when your order has been shipped.
          </span>
        </div>
      </div>
      <section className="mt-[5.7rem]">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-bluePrimary">
              Order Details
            </span>
            <div className="flex items-center gap-3">
              <CalenDarIcon className="h-7 w-7 fill-bluePrimary" />
              <span className="font-light text-lg text-grayPrimary">08/07/2024</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
