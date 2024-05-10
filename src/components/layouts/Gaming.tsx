import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import controller from "../../assets/products/controller.png";
import cd from "../../assets/products/cd.png";
import chair from "../../assets/products/chair.png";
import microphone from "../../assets/products/microphone.png";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import Product from "./ProductCard";

export default function Gaming() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      screenWidth >= 632 && screenWidth < 898
        ? 2
        : screenWidth >= 898 && screenWidth < 1190
          ? 3
          : screenWidth >= 1190
            ? 4
            : 1,
    slidesToScroll: 2,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: () => (
      <div className="h-[2px] rounded-full bg-bluePrimary"></div>
    ),
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="mt-[8rem] px-4 2xlg:px-0">
      <div className="flex items-center  justify-between text-bluePrimary">
        <span className="text-center text-[1.9rem] font-semibold capitalize">
          gaming
        </span>
        <button className="relative top-[.1rem] text-sm font-light underline">
          View more
        </button>
      </div>
      <div className="mt-[4rem]">
        <SlickSlider {...settings} className="px-7">
          <div className="card-slide">
            <Product
              name="controller PS5"
              price="800"
              imageProduct={controller}
            />
          </div>
          <div className="card-slide">
            <Product name="FC 24 PS5" price="600" imageProduct={cd} />
          </div>
          <div className="card-slide">
            <Product name="gaming chair" price="4 000" imageProduct={chair} />
          </div>
          <div className="card-slide">
            <Product
              name="microphone RGB"
              price="1 200"
              imageProduct={microphone}
            />
          </div>
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
      className="absolute right-0 top-[40%] z-[1] md:top-[50%] 2xlg:right-0"
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
      className="absolute left-0 top-[40%] z-[1] md:top-[50%] 2xlg:left-0"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
