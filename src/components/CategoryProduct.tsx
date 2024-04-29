import redmi from "../assets/products/redmi.png";
import Product from "./layouts/Product";

export default function CategoryProduct() {
  return (
    <section className="mt-[4rem]">
      <h1 className="text-center text-[1.9rem] font-semibold text-bluePrimary">
        Electronic
      </h1>
      <div className="mt-[4rem] flex flex-col items-center gap-16">
        <Product name="Xiaomi redmi R..." price="1 500" imageProduct={redmi} />
        <Product name="Xiaomi redmi R..." price="1 500" imageProduct={redmi} />
      </div>
    </section>
  );
}
