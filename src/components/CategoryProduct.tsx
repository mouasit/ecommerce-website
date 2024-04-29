import Product from "./layouts/Product";
import redmi from "../assets/products/redmi.png";
import airpods from "../assets/products/airpods.png";
import ipad from "../assets/products/ipad.png";
import headPhones from "../assets/products/headphones-black.png";
import smartWatch from "../assets/products/smart-watch-red.png";

export default function CategoryProduct() {
  return (
    <section className="mt-[4rem]">
      <h1 className="text-center text-[1.9rem] font-semibold text-bluePrimary">
        Electronic
      </h1>
      <div className="mt-[4rem] flex flex-col items-center gap-16">
        <Product name="Xiaomi redmi R..." price="1 500" imageProduct={redmi} />
        <Product name="Apple airpods 3" price="300" imageProduct={airpods} />
        <Product
          name="Surface Headpho..."
          price="1 500"
          imageProduct={headPhones}
        />
        <Product name="Smart watch red" price="300" imageProduct={smartWatch} />
      </div>
    </section>
  );
}
