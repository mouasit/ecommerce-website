import iphone from "../../assets/products/iphone.png";
import { AddToCartIcon } from "../Icons";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Product() {
  return (
    <div className="card flex w-[15.5rem] flex-col gap-5 md:w-[28%] lg:w-[15.5rem] ">
      <button className="flex  items-center justify-center rounded-[1rem] bg-grayLight p-6">
        <img src={iphone} alt="product" className="w-[13rem]" />
      </button>
      <div className="flex flex-col justify-center gap-1">
        <span className="text-center  text-[1.1rem] capitalize text-bluePrimary">
          iphone 14 plus
        </span>
        <div className="flex justify-center gap-1 text-[1.5rem] font-bold text-bluePrimary">
          11 000<span className="text-yellowPrimary">DH</span>
        </div>
      </div>
      <div className="flex gap-2">
        <SecondaryButton value="view more" className="w-full" />
        <PrimaryButton
          value={<AddToCartIcon className="h-7 w-7 fill-bluePrimary" />}
          className="flex w-[4.5rem] items-center justify-center"
        />
      </div>
    </div>
  );
}
