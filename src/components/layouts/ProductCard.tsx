import { useContext } from "react";
import { useEffect, useState } from "react";
import { AddToCartIcon, CheckCartIcon } from "./Icons";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { getProduct } from "../../API";
import { currency, formatNumberWithSpaces } from "../../Helpers";
import type { DisplayProduct } from "../../API";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ShoppingCartContext } from "../../App";

export default function ProductCard({
  productId,
  responsiveWidth,
}: {
  productId: string;
  responsiveWidth?: string;
}) {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState<DisplayProduct>();
  const [addToShoppingCart, setAddToShoppingCart] = useState<boolean>(
    shoppingCartContext.shoppingCart.find(
      (productShoppingCart: ShoppingCart) =>
        productShoppingCart.idProduct === productId,
    )
      ? true
      : false,
  );
  useEffect(() => {
    if (
      !shoppingCartContext.shoppingCart.find(
        (productShoppingCart: ShoppingCart) =>
          productShoppingCart.idProduct === productId,
      )
    )
      setAddToShoppingCart(false);
  }, [shoppingCartContext]);
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
              <span className="break-words text-yellowPrimary">{currency}</span>
            </div>
          </div>
        </div>
        <div className="flex  gap-2">
          <SecondaryButton
            value="view more"
            className="w-full"
            to={`/Product/${productId}`}
          />
          <PrimaryButton
            icon={
              addToShoppingCart ? (
                <CheckCartIcon className="h-7 w-7 fill-bluePrimary" />
              ) : (
                <AddToCartIcon className="h-7 w-7 fill-bluePrimary" />
              )
            }
            className="flex w-[4.5rem] items-center justify-center"
            onClick={() => {
              if (!addToShoppingCart && product.hasVariants)
                navigate(`/Product/${productId}`);
              else {
                if (
                  !shoppingCartContext.shoppingCart.find(
                    (productShoppingCart: ShoppingCart) =>
                      productShoppingCart.idProduct === productId,
                  )
                ) {
                  shoppingCartContext.setShoppingCart([
                    ...shoppingCartContext.shoppingCart,
                    {
                      idProduct: product.id,
                      nameProduct: product.name,
                      price: product.price,
                      quantity: 1,
                      imageProduct: product.imageProduct,
                    },
                  ]);
                  setAddToShoppingCart(true);
                } else {
                  shoppingCartContext.setShoppingCart(
                    shoppingCartContext.shoppingCart.filter(
                      (productShoppingCart: ShoppingCart) =>
                        productShoppingCart.idProduct !== product.id,
                    ),
                  );
                }
              }
            }}
          />
        </div>
      </div>
    );
  return <div className="h-screen"></div>;
}
