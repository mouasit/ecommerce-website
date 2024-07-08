import { useContext, useEffect, useRef } from "react";
import { ShoppingCart, ShoppingCartContext } from "../../App";
import { CalenDarIcon, CheckGradientIcon } from "../layouts/Icons";
import { currency, formatNumberWithSpaces } from "../../Helpers";

export default function ThankYou() {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const shoppingCart = useRef(shoppingCartContext.shoppingCart);
  const subtotal = useRef(shoppingCartContext.subTotal);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
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
              <span className="text-lg font-light text-grayPrimary">
                08/07/2024
              </span>
            </div>
          </div>
          <table className="mt-[4.5rem] w-full table-fixed	">
            <thead>
              <tr>
                <th className="text-left font-medium text-bluePrimary">
                  Product
                </th>
                <th className="font-medium text-bluePrimary">Quantity</th>
                <th className="text-end font-medium text-bluePrimary">Total</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.current.map(
                (product: ShoppingCart, index: number) => (
                  <tr
                    className="border-b text-lg text-bluePrimary last:border-b-0"
                    key={index}
                  >
                    <td className="flex items-center gap-6 py-12">
                      <img
                        src={product.imageProduct}
                        alt="product"
                        className="w-[6rem] rounded-lg"
                      />
                      <span className="capitalize">{product.nameProduct}</span>
                    </td>
                    <td className="text-center">{product.quantity}</td>
                    <td className="text-end font-bold">
                      {formatNumberWithSpaces(product.price)} {currency}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
            <tfoot>
              <tr className="text-xl font-semibold text-bluePrimary">
                <td colSpan={3} className="text-end">
                  Subtotal :{" "}
                  <span>
                    {formatNumberWithSpaces(subtotal.current)}{" "}
                    <span className="text-yellowPrimary">{currency}</span>
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  );
}
