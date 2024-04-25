import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import iphone from "../assets/products/iphone.png";
import { AddToCartIcon, ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import SecondaryButton from "./layouts/SecondaryButton";
import PrimaryButton from "./layouts/PrimaryButton";
import Product from "./layouts/Product";

export default function Gaming() {
    const responsiveWidth = "w-[90%]"
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: () => (
      <div className="h-[2px] rounded-full bg-bluePrimary"></div>
    ),
  };

  return (
    <div className="mt-[8rem] px-4 2xl:px-0">
      <span className="text-center text-[1.9rem] font-semibold capitalize text-bluePrimary">
        gaming
      </span>
      <div className="mt-[4rem]">
        <SlickSlider {...settings}>
          <Product name="iphone 14 plus" price="11 000" imageProduct={iphone} responsiveWidth={responsiveWidth}/>
          <Product name="iphone 14 plus" price="11 000" imageProduct={iphone} responsiveWidth={responsiveWidth}/>
          <Product name="iphone 14 plus" price="11 000" imageProduct={iphone} responsiveWidth={responsiveWidth}/>
          <Product name="iphone 14 plus" price="11 000" imageProduct={iphone} responsiveWidth={responsiveWidth}/>
        </SlickSlider>
      </div>
    </div>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-[40%] z-[1] md:top-[50%] 2xl:right-0"
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
      className="absolute left-0 top-[40%] z-[1] md:top-[50%] 2xl:left-0"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
