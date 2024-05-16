type ProductCardCheckout = {
  imageProduct: any;
  name: string;
  quantity: string;
  price: string;
};

export default function ProductCardCheckout({
  name,
  quantity,
  price,
  imageProduct,
}: ProductCardCheckout) {
  return (
    <div className="flex items-center gap-6 break-all">
      <div className="flex flex-1 items-center gap-6">
        <div className="flex-none rounded-xl bg-white">
          <img src={imageProduct} alt="product" className="w-[6rem]" />
        </div>
        <div className="flex flex-col">
          <span className="text-bluePrimary">{name}</span>
          <span className="text-grayPrimary">X{quantity}</span>
        </div>
      </div>
      <span className="font-semibold text-bluePrimary">56 DH</span>
    </div>
  );
}
