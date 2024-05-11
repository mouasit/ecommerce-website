import iphone from "../../assets/products/iphone.png";
import tShirt from "../../assets/products/t-shirt.png";
import speaker from "../../assets/products/speaker.png";
import microwave from "../../assets/products/microwave.png";
import laptop from "../../assets/products/laptop.png";
import cable from "../../assets/products/cable.png";
import airpods from "../../assets/products/airpods.png";
import powerBank from "../../assets/products/power-bank.png";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const responsiveWidth =
    "md:w-[28%] lg:w-[30%] mlg:w-[21.3%] xl:w-[21.3%] xlg:w-[22.2%]";
  return (
    <section className="cards mt-[5.7rem] flex flex-col items-center gap-16 px-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-0  sm:px-[8vw] md:justify-start md:gap-x-[7.4vw] md:px-4 lg:gap-x-[4.7vw] lg:px-4 xlg:gap-x-[3rem] 2xlg:px-0">
      <ProductCard
        name="iphone 14 plus"
        price="11 000"
        imageProduct={iphone}
        responsiveWidth={responsiveWidth}
      />
      <ProductCard
        name="T-shirt green"
        price="200"
        imageProduct={tShirt}
        responsiveWidth={responsiveWidth}
      />
      <ProductCard
        name="JBL Flip 5"
        price="1 500"
        imageProduct={speaker}
        responsiveWidth={responsiveWidth}
      />
      <ProductCard
        name="Microwave oven"
        price="3 000"
        imageProduct={microwave}
        responsiveWidth={responsiveWidth}
      />
      <ProductCard
        name="OMEN 16-wd0040nf"
        price="12 000"
        imageProduct={laptop}
        responsiveWidth={responsiveWidth}
      />
      <ProductCard
        name="Baseus Tungsten"
        price="400"
        imageProduct={cable}
        responsiveWidth={responsiveWidth}
      />
      <ProductCard
        name="Apple airpods 3"
        price="300"
        imageProduct={airpods}
        responsiveWidth={responsiveWidth}
      />
      <ProductCard
        name="Power Bank"
        price="600"
        imageProduct={powerBank}
        responsiveWidth={responsiveWidth}
      />
    </section>
  );
}
