import { useContext } from "react";
import { currency, formatNumberWithSpaces } from "../../Helpers";
import { TrashIcon } from "./Icons";
import { ShoppingCartContext } from "../../App";
import type { ShoppingCart } from "../../App";
import { Link } from "react-router-dom";

export default function ProductShoppingCartCard({
  productId,
  name,
  price,
  quantity,
  imageProduct,
  onClick,
}: {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageProduct: any;
  onClick?: () => void;
}) {
  const shoppingCartContext = useContext(ShoppingCartContext);
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <Link
        to={`/Product/${productId}`}
        className="flex flex-shrink-0 items-center gap-3 text-left"
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        <img src={imageProduct} alt="product" className="w-[5rem] rounded-lg" />
        <span className="flex w-[44vw] flex-col gap-1 capitalize text-bluePrimary sm:w-[11rem] ">
          <span className="truncate font-medium">{name}</span>
          <span className="space-x-1 break-words font-light text-grayPrimary">
            <span>{formatNumberWithSpaces(price)}</span>
            <span>{currency}</span>
          </span>
        </span>
      </Link>
      <span className="w-[4rem] break-words  text-end text-grayPrimary">
        X {quantity}
      </span>
      <button
        className="rounded-full bg-gray-100 p-2"
        onClick={() => {
          shoppingCartContext.setShoppingCart(
            shoppingCartContext.shoppingCart.filter(
              (productShoppingCart: ShoppingCart) =>
                productShoppingCart.idProduct !== productId,
            ),
          );
        }}
      >
        <TrashIcon className="h-5 w-5 fill-bluePrimary" />
      </button>
    </div>
  );
}
