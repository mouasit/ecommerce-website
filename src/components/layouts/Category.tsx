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
      className={`${backgroundColor}  ${textColor} relative flex h-[9rem] w-full justify-between rounded-xl py-3 pl-5 pr-0 md:h-[10rem] md:w-[31.8%] lg:h-[11rem] xl:h-[12rem]  xl:w-[25.7%] xlg:h-[15rem] xlg:rounded-[1.5rem]`}
    >
      <div className="z-[1] flex flex-col justify-between">
        <span className=" mxs:w-auto w-[8rem] text-[1.688rem] font-semibold capitalize md:w-[2rem] md:text-[2.4vw] lg:text-[1.7rem]">
          {name}
        </span>
        <button className="w-[5.9rem]  text-left  md:text-sm">Shop now</button>
      </div>
      <img
        src={imageProduct}
        alt="product"
        className="absolute right-2 top-5 w-[7rem]  md:top-7 lg:w-[8rem] xl:top-[2.5rem]  xlg:top-[5rem] xlg:w-[8.5rem]"
      />
    </div>
  );
}
