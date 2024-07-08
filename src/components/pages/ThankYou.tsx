import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../App";
import { CheckGradientIcon } from "../layouts/Icons";

export default function ThankYou() {
  const shoppingCartContext = useContext(ShoppingCartContext);
  useEffect(() => {
    shoppingCartContext.setShoppingCart([]);
  }, []);
  return (
    <div className="mt-[5.7rem] md:px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center gap-6">
        <CheckGradientIcon className="h-[6.5rem] w-[6.5rem]" />
        <h1 className="text-[2rem] font-bold capitalize text-bluePrimary">
          thank you
        </h1>
        <div className="flex flex-col items-center justify-center gap-1 font-light text-grayPrimary">
          <span>Your order has been received</span>
          <span>
            We will notify you by email when your order has been shipped.
          </span>
        </div>
      </div>
    </div>
  );
}
