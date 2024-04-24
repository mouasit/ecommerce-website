import Product from "./layouts/Product";
import iphone from "../assets/products/iphone.png";
import tShirt from "../assets/products/t-shirt.png";
import speaker from "../assets/products/speaker.png";
import microwave from "../assets/products/microwave.png";
import laptop from "../assets/products/laptop.png";
import cable from "../assets/products/cable.png";

export default function Products() {
  return (
    <section className="cards mt-[5.7rem] flex flex-col items-center gap-16 px-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-0  sm:px-[8vw] md:justify-start md:gap-x-[7.4vw] md:px-4 lg:gap-x-[3rem] lg:px-4 2xl:px-0">
      <Product name="iphone 14 plus" price="11 000" imageProduct={iphone} />
      <Product name="T-shirt green" price="200" imageProduct={tShirt} />
      <Product name="JBL Flip 5" price="1500" imageProduct={speaker} />
      <Product name="Microwave oven" price="3 000" imageProduct={microwave} />
      <Product name="OMEN 16-wd0040nf" price="12 000" imageProduct={laptop} />
    </section>
  );
}
