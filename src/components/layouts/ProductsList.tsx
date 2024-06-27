import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getRecentProduct } from "../../API";

export default function ProductsList() {
  const responsiveWidth =
    "md:w-[28%] lg:w-[30%] mlg:w-[21.3%] xl:w-[21.3%] xlg:w-[22.2%]";
  const [products, setProducts] = useState<string[]>();
  useEffect(() => {
    setProducts(getRecentProduct());
  }, []);
  if (products)
    return (
      <section className="cards mt-[5.7rem] flex flex-col items-center gap-16 px-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-0  sm:px-[8vw] md:justify-start md:gap-x-[7.4vw] md:px-4 lg:gap-x-[4.7vw] lg:px-4 xlg:gap-x-[3rem] 2xlg:px-0">
        {products.map((productId: string, index: number) => (
          <ProductCard
            key={index}
            productId={productId}
            responsiveWidth={responsiveWidth}
          />
        ))}
      </section>
    );
  return <div className="h-screen"></div>;
}
