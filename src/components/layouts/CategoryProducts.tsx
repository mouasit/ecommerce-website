import ProductCard from "./ProductCard";

export default function CategoryProducts({
  products,
  title,
}: {
  products: string[];
  title: string;
}) {
  

  const responsiveWidth =
    "sm:w-[31.8%] md:w-[28%]  lg:w-[30%] xl:w-[23.5%]  2xlg:w-[15.5rem]";
  return (
    <div className="w-full">
      <h1 className="text-center text-[1.9rem] font-semibold capitalize text-bluePrimary">
        {title}
      </h1>
      <div className="mt-[4rem] flex flex-col items-center gap-16 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start sm:gap-x-[2.1vw] md:gap-x-[8%] lg:gap-x-[5%]  xl:gap-x-[2%] 2xlg:gap-x-[3.3%]">
        {products.map((productId: string, index: number) => (
          <ProductCard
            key={index}
            productId={productId}
            responsiveWidth={responsiveWidth}
          />
        ))}
      </div>
    </div>
  );
}
