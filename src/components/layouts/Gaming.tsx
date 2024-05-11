import ProductsCardsSlider from "./ProductsCardsSlider";

export default function Gaming() {
  return (
    <div className="mt-[8rem] px-4 2xlg:px-0">
      <div className="flex items-center  justify-between text-bluePrimary">
        <span className="text-center text-[1.9rem] font-semibold capitalize">
          gaming
        </span>
        <button className="relative top-[.1rem] text-sm font-light underline">
          View more
        </button>
      </div>
      <div className="mt-[4rem]">
        <ProductsCardsSlider />
      </div>
    </div>
  );
}
