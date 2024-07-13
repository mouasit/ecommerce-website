import { useContext, useEffect, useRef } from "react";
import { ShoppingCart, ShoppingCartContext } from "../../App";
import {
  CalenDarIcon,
  CheckGradientIcon,
  CustomerIcon,
  PaymentIcon,
  TruckShippingIcon,
} from "../layouts/Icons";
import { currency, formatNumberWithSpaces, getTodayDate } from "../../Helpers";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  const shoppingCartContext = useContext(ShoppingCartContext);
  const shoppingCart = useRef(shoppingCartContext.shoppingCart);
  const subtotal = useRef(shoppingCartContext.subTotal);
  const placeOrder = useRef(shoppingCartContext.placeOrder);
  const userInformation = useRef(shoppingCartContext.userInformation);
  const shippingCost = useRef(shoppingCartContext.shippingCost);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (!placeOrder.current) navigate("/");
    if (placeOrder.current) {
      shoppingCartContext.setShoppingCart([]);
      shoppingCartContext.placeOrder = false;
      shoppingCartContext.userInformation = {
        fullName: "",
        city: "",
        address: "",
        phone: "",
      };
      shoppingCartContext.shippingCost = 0;
    }
  }, []);

  if (placeOrder.current)
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
        <section className="mt-[5.7rem] flex flex-col gap-[4rem]">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-bluePrimary">
                Order Details
              </span>
              <div className="flex items-center gap-3">
                <CalenDarIcon className="h-7 w-7 fill-bluePrimary" />
                <span className="text-lg font-light text-grayPrimary">
                  {getTodayDate()}
                </span>
              </div>
            </div>
            <table className="mt-[4.5rem] w-full lg:table-fixed	">
              <thead>
                <tr>
                  <th className="text-left font-medium text-bluePrimary">
                    Product
                  </th>
                  <th className="font-medium text-bluePrimary">Quantity</th>
                  <th className="text-end font-medium text-bluePrimary">
                    Total
                  </th>
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
                        <span className="capitalize">
                          {product.nameProduct}
                        </span>
                      </td>
                      <td className=" text-center">{product.quantity}</td>
                      <td className="text-end font-bold">
                        {formatNumberWithSpaces(product.price)} {currency}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
            <div>
              <div className="flex items-center justify-between border-b py-12 text-lg">
                <span className="text-grayPrimary">Subtotal</span>
                <span className="font-bold text-bluePrimary">
                  {formatNumberWithSpaces(subtotal.current)} {currency}
                </span>
              </div>
              <div className="flex items-center justify-between border-b py-12 text-lg">
                <span className="text-grayPrimary">Delivery</span>
                <span className="font-bold text-bluePrimary">
                  {shippingCost.current}{" "}
                  {shippingCost.current !== "Free" ? `${currency}` : null}
                </span>
              </div>
              <div className="flex items-center justify-between py-12 text-xl font-bold text-bluePrimary">
                <span>Total</span>
                <span>
                  {shippingCost.current === "Free"
                    ? formatNumberWithSpaces(subtotal.current + 0)
                    : formatNumberWithSpaces(
                        subtotal.current + shippingCost.current,
                      )}{" "}
                  <span className="text-yellowPrimary">{currency}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 mxl:flex-row mxl:items-start mxl:justify-between mxl:gap-4">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 text-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellowPrimary">
                  <CustomerIcon className="h-5 w-5 fill-bluePrimary" />
                </span>
                <span className="text-bluePrimary">Customer</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-grayPrimary">Full Name:</span>
                  <span className="break-all capitalize text-bluePrimary">
                    {userInformation.current.fullName}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-grayPrimary">Phone:</span>
                  <span className="break-all capitalize text-bluePrimary">
                    {userInformation.current.phone}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 text-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellowPrimary">
                  <TruckShippingIcon className="h-5 w-5 fill-bluePrimary" />
                </span>
                <span className="text-bluePrimary">Shipping</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-grayPrimary">City:</span>
                  <span className="break-all capitalize text-bluePrimary">
                    {userInformation.current.city}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-grayPrimary">Address:</span>
                  <span className="break-all capitalize text-bluePrimary">
                    {userInformation.current.address}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 text-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellowPrimary">
                  <PaymentIcon className="h-5 w-5 fill-bluePrimary" />
                </span>
                <span className="text-bluePrimary">Payment</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-grayPrimary">Payment Method:</span>
                  <span className=" text-bluePrimary">Cash on delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  else
    return (
      <div className="fixed left-0 top-0 z-[2] h-full w-full bg-white"></div>
    );
}
