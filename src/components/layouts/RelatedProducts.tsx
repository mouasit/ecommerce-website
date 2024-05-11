import ProductsCardsSlider from "./ProductsCardsSlider";

export default function RelatedProducts() {
  return (
    <div className="mt-[8rem] px-4 2xlg:px-0">
      <div className="text-center text-[1.9rem] font-semibold capitalize text-bluePrimary">
        related products
      </div>
      <div className="mt-[4rem]">
        <ProductsCardsSlider />
      </div>
    </div>
  );
}
