import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import image1 from "../assets/products/product-info/1.png";
import image2 from "../assets/products/product-info/2.png";
import image3 from "../assets/products/product-info/3.png";
import image4 from "../assets/products/product-info/4.png";

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
    <div className="mt-[2rem] px-4">
      <SlickSlider {...settings} className=" rounded-3xl bg-grayLight">
        <div className="relative top-[.2rem] p-16">
          <div className="flex justify-center ">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="relative top-[.2rem] p-16">
          <div className="flex justify-center ">
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="relative top-[.2rem] p-16">
          <div className="flex justify-center ">
            <img src={image3} alt="" />
          </div>
        </div>
        <div className="relative top-[.2rem] p-16">
          <div className="flex justify-center ">
            <img src={image4} alt="" />
          </div>
        </div>
      </SlickSlider>
    </div>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-[50%] z-[1] 2xl:right-0"
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
      className="absolute left-4 top-[50%] z-[1] 2xl:left-0"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
