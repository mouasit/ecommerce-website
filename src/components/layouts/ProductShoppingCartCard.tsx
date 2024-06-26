import { useContext } from "react";
import { formatNumberWithSpaces } from "../../Helpers";
import { TrashIcon } from "./Icons";
import { ShoppingCartContext } from "../../App";
import type { ShoppingCart } from "../../App";

export default function ProductShoppingCartCard({
  productId,
  name,
  price,
  imageProduct,
}: {
  productId: string;
  name: string;
  price: number;
  imageProduct: any;
}) {
  const shoppingCartContext = useContext(ShoppingCartContext);
  return (
    <div className="flex w-full items-center justify-between gap-1">
      <button className="flex flex-shrink-0 gap-3 text-left">
        <img src={imageProduct} alt="product" className="w-[5rem] rounded-lg" />
        <span className="flex w-[50vw] flex-col gap-1 capitalize text-bluePrimary sm:w-[13rem] ">
          <span className="truncate font-medium">{name}</span>
          <span className="break-words font-light text-grayPrimary">
            {formatNumberWithSpaces(price)} DH
          </span>
        </span>
      </button>
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
