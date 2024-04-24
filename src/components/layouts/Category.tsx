type Category = {
  name: string;
  imageProduct: any;
  backgroundColor: string;
  textColor: string;
};
export default function Category({
  name,
  imageProduct,
  backgroundColor,
  textColor,
}: Category) {
  return (
    <div
      className={`relative flex h-[20.313rem] w-[20rem] flex-col justify-between rounded-[2.25rem] p-5 bg-${backgroundColor}  text-${textColor}`}
    >
      <span className="w-[13rem] text-[1.688rem] font-semibold capitalize">
        {name}
      </span>
      <img
        src={imageProduct}
        alt="product"
        className="absolute right-2 top-[6.1rem] w-[11.938rem]"
      />
      <button className="w-[5.9rem]  text-left text-[1.188rem] font-medium">
        Shop now
      </button>
    </div>
  );
}
