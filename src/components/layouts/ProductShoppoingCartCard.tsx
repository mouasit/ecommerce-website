import { TrashIcon } from "./Icons";

export default function ProductShoppoingCartCard({
  name,
  price,
  imageProduct,
}: {
  name: string;
  price: string;
  imageProduct: any;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-1">
      <button className="flex flex-shrink-0 gap-3 text-left">
        <div className="flex items-center justify-center rounded-xl bg-grayLight p-3">
          <img src={imageProduct} alt="product" className="h-[5rem] w-[5rem]" />
        </div>
        <span className="flex w-[50vw] flex-col gap-1 capitalize text-bluePrimary sm:w-[13rem] ">
          <span className="truncate font-medium">{name}</span>
          <span className="break-words font-light text-grayPrimary">
            {price} DH
          </span>
        </span>
      </button>
      <button className="rounded-full bg-gray-100 p-2">
        <TrashIcon className="h-5 w-5 fill-bluePrimary" />
      </button>
    </div>
  );
}
