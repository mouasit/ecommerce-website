import Product from "./layouts/Product";
import redmi from "../assets/products/redmi.png";
import airpods from "../assets/products/airpods.png";
import ipad from "../assets/products/ipad.png";
import headPhones from "../assets/products/headphones-black.png";
import smartWatch from "../assets/products/smart-watch-red.png";
import powerBank from "../assets/products/power-bank.png";

export default function CategoryProduct() {
  const responsiveWidth =
    "sm:w-[31.8%] md:w-[28%]  lg:w-[30%] xl:w-[23.5%]  2xlg:w-[15.5rem]";
  return (
    <section className="mt-[4rem] flex flex-col-reverse gap-16 px-4 lg:flex-row lg:gap-0 2xlg:px-0">
      <div className="flex flex-col  gap-7 capitalize text-bluePrimary lg:w-[19rem]">
        <span className="text-xl font-semibold ">categories</span>
        <ul className="flex flex-col gap-5 font-light">
          <li>
            <button className="text-left capitalize">phones</button>
          </li>
          <li>
            <button className="text-left capitalize">tablets</button>
          </li>
          <li>
            <button className="text-left capitalize">air pods</button>
          </li>
          <li>
            <button className="text-left capitalize">headphones</button>
          </li>
          <li>
            <button className="text-left capitalize">laptops</button>
          </li>
          <li>
            <button className="text-left capitalize">smart watches</button>
          </li>
          <li>
            <button className="text-left capitalize">accessories</button>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <h1 className="text-center text-[1.9rem] font-semibold capitalize text-bluePrimary">
          electronics
        </h1>
        <div className="mt-[4rem] flex flex-col items-center gap-16 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-x-[2.1vw] md:gap-x-[8%] lg:gap-x-[5%]  xl:gap-x-[2%] 2xlg:gap-x-[3.3%]">
          <Product
            name="Xiaomi redmi R..."
            price="1 500"
            imageProduct={redmi}
            responsiveWidth={responsiveWidth}
          />
          <Product
            name="Apple airpods 3"
            price="300"
            imageProduct={airpods}
            responsiveWidth={responsiveWidth}
          />
          <Product
            name="Apple ipad 10"
            price="4 000"
            imageProduct={ipad}
            responsiveWidth={responsiveWidth}
          />
          <Product
            name="Surface Headpho..."
            price="1 500"
            imageProduct={headPhones}
            responsiveWidth={responsiveWidth}
          />
          <Product
            name="Smart watch red"
            price="300"
            imageProduct={smartWatch}
            responsiveWidth={responsiveWidth}
          />
          <Product
            name="Power Bank"
            price="600"
            imageProduct={powerBank}
            responsiveWidth={responsiveWidth}
          />
        </div>
      </div>
    </section>
  );
}
