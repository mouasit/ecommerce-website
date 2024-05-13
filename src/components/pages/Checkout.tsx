import Input from "../layouts/Input";
import redmi from "../../assets/products/redmi.png";
import ProductCardCheckout from "../layouts/ProductCardCheckout";

export default function Checkout() {
  return (
    <div className="mt-[5.7rem] flex flex-col gap-[5.7rem]">
      <h1 className="text-center text-[2.188rem] font-semibold capitalize text-bluePrimary">
        checkout
      </h1>
      <div className="flex flex-col gap-[3.5rem] px-4 2xlg:px-0">
        <h2 className="text-lg font-semibold text-bluePrimary">
          Your information
        </h2>
        <form className="flex flex-col gap-8">
          <Input label="Full name" placeholder="Enter your full name" />
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Phone" placeholder="Enter your phone" />
        </form>
      </div>
      <div className="flex flex-col gap-[3.5rem]">
        <h2 className="px-4 text-lg font-semibold text-bluePrimary">
          Your Order
        </h2>
        <div className="w-full bg-grayLight px-4 py-8">
          <div className="flex flex-col gap-8">
            <ProductCardCheckout
              imageProduct={redmi}
              name="Xiaomi redmi R..."
              quantity={2}
              price={1500}
            />
            <ProductCardCheckout
              imageProduct={redmi}
              name="Xiaomi redmi R..."
              quantity={2}
              price={1500}
            />
            <ProductCardCheckout
              imageProduct={redmi}
              name="Xiaomi redmi R..."
              quantity={2}
              price={1500}
            />
          </div>
          <div className="flex w-full items-center justify-between text-bluePrimary border-t">
            <span className="capitalize">subtotal</span>
            <span className="font-bold">$500,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
