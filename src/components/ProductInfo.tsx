import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import {
  AddToCartProductIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
} from "./Icons";
import image1 from "../assets/products/product-info/1.png";
import image2 from "../assets/products/product-info/2.png";
import image3 from "../assets/products/product-info/3.png";
import image4 from "../assets/products/product-info/4.png";
import PrimaryButton from "./layouts/PrimaryButton";

export default function ProductInfo() {
  const imagesProduct = [image1, image2, image3, image4];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: (i: number) => {
      return (
        <div
          className={`product-slider-dots cursor-pointer rounded-xl border-[3px] border-grayLight bg-grayLight p-1`}
        >
          <img src={imagesProduct[i]} alt="" />
        </div>
      );
    },
  };
  return (
    <div>
      <div className="mt-[2rem] gap-8 px-4 md:flex md:justify-between ">
        <SlickSlider
          {...settings}
          className=" rounded-3xl bg-grayLight md:w-[50%] lg:ml-[7.4rem]"
        >
          <div className="relative top-[1rem] p-16 lg:top-[.2rem]">
            <div className="flex justify-center ">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="relative top-[1rem] p-16 lg:top-[.2rem]">
            <div className="flex justify-center ">
              <img src={image2} alt="" />
            </div>
          </div>
          <div className="relative top-[1rem] p-16 lg:top-[.2rem]">
            <div className="flex justify-center ">
              <img src={image3} alt="" />
            </div>
          </div>
          <div className="relative top-[1rem] p-16 lg:top-[.2rem]">
            <div className="flex justify-center ">
              <img src={image4} alt="" />
            </div>
          </div>
        </SlickSlider>

        <div className="mt-[12rem]  space-y-5 md:mt-2 md:w-[50%]">
          <span className="text-[1.5rem] font-semibold capitalize text-bluePrimary">
            Apple iPhone 13 6,1" 5G
          </span>
          <div className="space-x-2 text-[1.6rem] font-bold text-bluePrimary">
            <span>10 000</span>
            <span className="text-yellowPrimary">DH</span>
          </div>
          <ul className="ml-5 list-disc space-y-3 text-sm font-light text-grayPrimary">
            <li>Bass and Stereo Sound</li>
            <li>Display with 3088 x 1440 pixels resolution</li>
            <li>Memory, Storage & SIM: 12GB RAM, 256GB</li>
          </ul>
          <div className="flex items-center gap-5 text-lg font-medium text-bluePrimary">
            Chose color
            <div className="flex items-center gap-3">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                <CheckIcon className="h-4 w-4 fill-white" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#59965C]"></button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0053CF]"></button>
            </div>
          </div>
          <div className="relative top-5 flex max-w-[533px] gap-2 md:max-w-none">
            <div className="flex w-[60%] items-center justify-between rounded-2xl bg-grayLight p-3 text-xl font-medium text-bluePrimary">
              <button className="rounded-full bg-yellowPrimary p-1">
                <MinusIcon className="h-4 w-4 fill-bluePrimary" />
              </button>
              1
              <button className="rounded-full bg-yellowPrimary p-1">
                <PlusIcon className="h-4 w-4 fill-bluePrimary" />
              </button>
            </div>
            <PrimaryButton
              icon={
                <AddToCartProductIcon className="h-8 w-8 fill-bluePrimary" />
              }
              value="Add to cart"
              className="flex w-full items-center justify-center gap-3 text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-[38%] z-[1] lg:top-[50%] 2xl:right-0"
    >
      <ArrowRightIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}

function SliderPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-[38%] z-[1] lg:top-[50%] 2xl:left-0"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
