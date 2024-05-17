import { AddToCartIcon } from "./Icons";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

type Product = {
  name: string;
  price: string | number;
  imageProduct: any;
  responsiveWidth?: string;
};

export default function ProductCard({
  name,
  price,
  imageProduct,
  responsiveWidth,
}: Product) {
  return (
    <div className={`card flex w-[15.5rem] ${responsiveWidth} flex-col gap-5`}>
      <img src={imageProduct} alt="product" className="w-full rounded-[1rem]" />
      {/* <button className="flex  items-center justify-center rounded-[1rem] bg-grayLight p-6">
        <img src={imageProduct} alt="product" className="w-[13rem]" />
      </button> */}
      <div className="flex flex-col justify-center gap-1">
        <span className="truncate text-center text-[1.1rem] capitalize text-bluePrimary">
          {name}
        </span>
        <div className="flex w-full justify-center break-all text-[1.5rem] font-bold text-bluePrimary">
          <div className="space-x-1">
            <span>{price}</span>
            <span className="break-words text-yellowPrimary">DH</span>
          </div>
        </div>
      </div>
      <div className="flex  gap-2">
        <SecondaryButton value="view more" className="w-full" />
        <PrimaryButton
          icon={<AddToCartIcon className="h-7 w-7 fill-bluePrimary" />}
          className="flex w-[4.5rem] items-center justify-center"
        />
      </div>
    </div>
  );
}
