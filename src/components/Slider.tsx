import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import tv from "../assets/products/tv.png";
import PrimaryButton from "./layouts/PrimaryButton";

export default function Slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    customPaging: () => (
      <div className="h-[2px] rounded-full bg-bluePrimary"></div>
    ),
  };
  return (
    <SlickSlider {...settings}>
      <div>
        <div className="flex flex-col items-center gap-10 px-6 pt-12 md:flex-row md:justify-center md:gap-16 md:px-16  xl:gap-[10vw] ">
          <div className="flex flex-col items-center gap-[3rem] md:items-start">
            <div className="flex flex-col items-center gap-5 md:items-start md:gap-3">
              <div className="flex flex-col">
                <h3 className="text-[1.5rem] font-semibold text-bluePrimary md:text-[1.3rem] lg:text-[1.5rem]">
                  85" Q60C QLED 4K (2023)
                </h3>
                <span className="font-light text-grayPrimary md:text-[.8rem] lg:text-[.9rem]">
                  QA85Q60CAUXMV
                </span>
              </div>
              <p className="text-center text-sm font-light text-bluePrimary md:text-left lg:text-[1rem]">
                Technologie Quantum Matrix Pro / Neural Quantum Processor 8K
              </p>
            </div>
            <PrimaryButton
              value="shop now"
              className="w-[34vw]  sm:w-[10.264rem]"
            />
          </div>
          <img src={tv} alt="product" className="w-[23rem] lg:w-[28rem]" />
        </div>
      </div>
      <div className=" bg-green-300">
        <h3>1</h3>
      </div>
      <div className=" bg-green-300">
        <h3>1</h3>
      </div>
      <div className=" bg-green-300">
        <h3>1</h3>
      </div>
    </SlickSlider>
  );
}

function SliderNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-[40%] z-[1] md:top-[50%]"
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
      className="absolute left-4 top-[40%] z-[1] md:top-[50%]"
    >
      <ArrowLeftIcon className="h-5 w-5 fill-bluePrimary" />
    </button>
  );
}
