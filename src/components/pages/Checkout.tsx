import Input from "../layouts/Input";
import redmi from "../../assets/products/redmi.png";
import ProductCardCheckout from "../layouts/ProductCardCheckout";
import PrimaryButton from "../layouts/PrimaryButton";

export default function Checkout() {
  return (
    <div className="mt-[5.7rem] md:px-4 lg:px-0">
      <h1 className="text-center text-[2.188rem] font-semibold capitalize text-bluePrimary">
        checkout
      </h1>
      <section className="mt-[5.7rem] flex flex-col gap-[5.7rem] md:flex-row md:items-start md:justify-center md:gap-10 lg:gap-16">
        <div className="flex flex-col gap-[3.5rem] px-4 md:w-[45%] md:px-0 lg:w-[30rem] 2xlg:px-0">
          <h2 className="text-lg font-semibold text-bluePrimary">
            Your information
          </h2>
          <form className="flex flex-col gap-8">
            <Input label="Full name" placeholder="Enter your full name" />
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Phone" placeholder="Enter your phone" />
          </form>
        </div>
        <div className="flex flex-col gap-[3.5rem] md:w-[25rem]">
          <h2 className="px-4 text-lg font-semibold text-bluePrimary">
            Your Order
          </h2>
          <div className="flex w-full flex-col gap-8 bg-grayLight px-4 py-8 md:rounded-xl">
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
            <div className="flex w-full items-center justify-between border-t pt-8 text-xl text-bluePrimary">
              <span className="font-bold capitalize">total</span>
              <span className="font-bold">
                4500 <span className="text-yellowPrimary">DH</span>
              </span>
            </div>
            <PrimaryButton value="Place order" className="mt-9" />
          </div>
        </div>
      </section>
    </div>
  );
}
