import { useEffect, useState } from "react";
import { AddToCartIcon } from "./Icons";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { getProduct } from "../../API";
import { formatNumberWithSpaces } from "../../Helpers";
import type { DisplayProduct } from "../../API";
import { Link } from "react-router-dom";

export default function ProductCard({
  productId,
  responsiveWidth,
}: {
  productId: string;
  responsiveWidth?: string;
}) {
  const [product, setProduct] = useState<DisplayProduct>();
  useEffect(() => {
    setProduct(getProduct(productId));
  }, [productId]);
  if (product)
    return (
      <div
        className={`card flex w-[15.5rem] ${responsiveWidth} flex-col gap-5`}
      >
        <Link to={`/Product/${productId}`}>
          <img
            src={product.imageProduct}
            alt="product"
            className="w-full rounded-[1rem]"
          />
        </Link>
        <div className="flex flex-col justify-center gap-1">
          <span className="truncate text-center text-[1.1rem] capitalize text-bluePrimary">
            {product.name}
          </span>
          <div className="flex w-full justify-center break-all text-[1.5rem] font-bold text-bluePrimary">
            <div className="space-x-1">
              <span>{formatNumberWithSpaces(product.price)}</span>
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
  return <div className="h-screen"></div>;
}
