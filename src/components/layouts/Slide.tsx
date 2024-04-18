import PrimaryButton from "./PrimaryButton";

type InfoSlide = {
  nameProduct: string;
  subtitle: string;
  desc: string;
  linkImageProduct: any;
};

export default function Slide({
  nameProduct,
  subtitle,
  desc,
  linkImageProduct,
}: InfoSlide) {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 px-6 pt-12 md:flex-row md:justify-center md:gap-16 md:px-16  xl:gap-[10vw] ">
        <div className="flex flex-col items-center gap-[3rem] md:items-start">
          <div className="flex flex-col items-center gap-5 md:items-start md:gap-3">
            <div className="flex flex-col">
              <h3 className="text-[1.5rem] font-semibold text-bluePrimary md:text-[1.3rem] lg:text-[1.5rem]">
                {nameProduct}
              </h3>
              <span className="font-light text-grayPrimary md:text-[.8rem] lg:text-[.9rem]">
                {subtitle}
              </span>
            </div>
            <p className="text-center text-sm font-light text-bluePrimary md:text-left lg:text-[1rem]">
              {desc}
            </p>
          </div>
          <PrimaryButton
            value="shop now"
            className="w-[34vw]  sm:w-[10.264rem]"
          />
        </div>
        <img
          src={linkImageProduct}
          alt="product"
          className="w-[23rem] lg:w-[28rem]"
        />
      </div>
    </div>
  );
}
